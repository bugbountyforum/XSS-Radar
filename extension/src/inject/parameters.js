class Parameters {

  constructor () {
    this.attributes = ['href', 'name', 'action']
    this.parameters = []
    this.find()
  }

  add (parameter) {
    this.parameters.push(parameter)
  }

  find () {
    document.querySelectorAll('*').forEach((element) => {
      this.attributes.forEach((attribute) => {
        this['detect_' + attribute](element)
      })
    })
  }

  get () {
    return Array.from(
      new Set(this.parameters)
    )
  }

  detect_name (element) {
    var name = element.getAttribute('name')
    if (name != null) {
      this.add(name)
    }
  }

  detect_action (element) {
    var href = element.getAttribute('action')
    if (href != null) {
      this.detect_url_paramters(href)
    }
  }

  detect_href (element) {
    var href = element.getAttribute('href')
    if (href != null) {
      this.detect_url_paramters(href)
    }
  }

  detect_url_paramters (href) {
    var url = href.split('?')[1]
    if (typeof url != 'undefined') {
      var vars = url.split('&')
      for (var i = 0; i < vars.length; i++) {
        let param = vars[i].split('=')[0]
        this.add(param[0])
      }
    }
  }
}
