class Scanner {

  constructor () {
    this.parameters = new Parameters
    this.payloads = new Payloads
    this.target = document.URL
    this.url = new Url
    this.fuzz()
  }

  fuzz () {
    this.parameters.get().forEach((param) => {
      this.payloads.get().forEach((payload) => {
        this.test(this.target, param, payload)
      })
    })
  }

  test (url, param, payload) {
    fetch(this.url.get(url, param, payload), {
      method: 'GET',
      credentials: 'include'
    }).then((response) => {
      return response.text()
    }).then((html) => {
      this.createFrame(html)
    })
  }

  createFrame (html) {
    let frame = document.createElement('iframe')

    document.body.appendChild(frame)
    frame.contentWindow.document.open()
    frame.contentWindow.document.write(html)
    frame.contentWindow.document.close()
  }
}
