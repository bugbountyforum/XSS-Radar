class Scanner {

  constructor () {
    this.parameters = new Parameters
    this.payloads = new Payloads
    this.report = new Report
    this.target = document.URL
    this.url = new Url
    this.fuzz()
  }

  fuzz () {
    window.addEventListener('message', (event) => {
      setTimeout(() => {
        var frame = event.data.substr(4)
        if (event.data.substring(0, 4) == 'xss_') {
          let link = document.getElementById(frame).getAttribute('data-url')
          this.report.add(link)
        } else {
          console.log(frame.substring(0, 4))
        }
      }, 1000)
    })
    this.parameters.get().forEach((param) => {
      this.payloads.get().forEach((payload) => {
        this.test(this.target, param, payload.payload, payload.id)
      })
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
}
