class Scanner {

  constructor () {
    this.parameters = new Parameters
    this.target = document.URL
    this.url = new Url
    this.contexts = [];
    this.payloads = {};
  }

  fuzz () {
    console.log('Found the following parameters:')
    console.log(this.parameters.get())
    this.report = new Report
    window.addEventListener('message', (event) => {
      setTimeout(() => {
        var frame = event.data.substr(4)
        if (event.data.substring(0, 4) == 'xss_') {
          let link = document.getElementById(frame).getAttribute('data-url')
          this.report.add(link)
        } else {
          console.log('Could not detect event:')
          console.log(frame.substring(0, 4))
        }
      }, 1000)
    })
    this.parameters.get().forEach((param) => {
      if(!param) { return }
      // TODO: Test which characters are reflected

      // Generate a random string to identify reflected payload
      var token = this.generateToken(8);
      this.loadUrl(this.url.get(this.target, param, token), 'GET', token, (response, token) => {
        this.getReflectedInstances(token, response, (payloadsToTest) => {
          var id = 0;
          var payloads = [];
          payloadsToTest.forEach((payload) => {
            payloads.push({
              id: id,
              payload: payload.replace('{id}', id)
            })
            id++;
          })
          if (payloads.length == 0) {
            console.log('Payload ' + param + ' does not seem to be reflected.')
          }
          payloads.forEach((payload) => {
            console.log('testing payload ' + payload.payload + ' with param ' + param)
            this.test(this.target, param, payload.payload, payload.id)
          })
        });
      });
    })
  }

  test (url, param, payload, id) {
    url = this.url.get(url, param, payload)
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then((response) => {
      return response.text()
    }).then((html) => {
      this.createFrame(html, url, id)
    })
  }

  createFrame (html, url, id) {
    let frame = document.createElement('iframe')
    frame.setAttribute('id', id)
    frame.setAttribute('data-url', url)
    frame.style.display = 'none'
    document.body.appendChild(frame)
    frame.contentWindow.document.open()
    frame.contentWindow.document.write('<script>function alert(m){setTimeout(function(){parent.postMessage("xss_" + m, "*")},1000);}</script>' + html)
    frame.contentWindow.document.close()
  }

  // Generates a random token of size length
  generateToken(length) {
    return (Math.random().toString(36)+'00000000000000000').slice(2, length + 2);
  }

  // Load content of url asynchronously
  // TODO: support authentication, post data
  loadUrl(url, method, token, callback) {

    fetch(url, { method: 'GET'}).then((response) => {
      return response.text();
    }).then((text) => {
      callback(text,token);
    });
  }

  //gets instances where payload is completely reflected
  getReflectedInstances(payload, response, callback) {
    var payloadsToTest = [];
    if (response.includes(payload)) {
      console.log('Using payloads for type general')
      payloadsToTest=payloadsToTest.concat(this.payloads.general)
      //dont forget about angular
      if (window.location="javascript:typeof angular != 'undefined'"){
        console.log("Using payloads for type angular")
        payloadsToTest=payloadsToTest.concat(this.payloads.angular)
      }
    }
    this.prepareDOM(response, payload, (node, type) => {
      console.log('found match with ' + node.tagName + ', ' + type.typeName);
      // test to see if this matches one of our contexts
      for (var i=0; i < this.contexts.length; i++) {
        if(this.contexts[i].type.toUpperCase() == node.tagName.toUpperCase()) {
          console.log('Using payloads for type ' + this.contexts[i].type)
          if (this.contexts[i].matches.includes('*')
            || this.contexts[i].matches.includes(type.attributeName.toLowerCase()) ) {
            payloadsToTest = payloadsToTest.concat(this.payloads[this.contexts[i].file.split('.')[0]]);
          }
        }
      }
    }, () => {
      callback(payloadsToTest);
    });
  }

  prepareDOM(html, search, callback, finished) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(html, "text/html");
    this.iterateDOM(htmlDoc, search, callback, finished);
  }

  iterateDOM(node, search, callback, finished, level=0) {
    var parentNode = node;
    var hasGrandchildren = false;
    var node = node.firstChild;
    while(node) {
        if (node.hasChildNodes()) {
          this.iterateDOM(node, search, callback, finished, level+1);
          hasGrandchildren = true;
        }
        if (node.tagName && node.hasAttributes()) { //check attributes
          for (var attribute of node.attributes) {
            if (attribute.value.includes(search)) {
              callback(node, {
                'typeName': 'attribute',
                'attributeName': attribute.name
              })
            }
          }
        }
        node = node.nextSibling;
    }
    if (!hasGrandchildren) {
      if (parentNode.innerHTML.includes(search)) {
        callback(parentNode, {
          'typeName': 'innerHTML'
        });
      }
    }
    if (level == 0) {
      finished();
    }
  }
}
