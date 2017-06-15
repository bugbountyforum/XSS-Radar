'use strict'

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
    this.detect_url(document.URL)
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

  detect_url (url) {
    this.detect_url_paramters(url)
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
    if(!href.includes('?')) return
    var pairs = href.substring(href.indexOf('?') + 1).split('&');
    for (var i = 0; i < pairs.length; i++) {
        if (!pairs[i])
            continue;
        var pair = pairs[i].split('=');
        this.add(decodeURIComponent(pair[0]))
     }
  }
}
