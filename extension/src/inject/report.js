'use strict'

class Report {

  constructor() {
    this.w = window.open('', 'results', 'width=900,height=800')
    this.setBody()
  }

  setBody() {
    let title = document.createElement('h1')
    title.setAttribute('style', 'width: 100%;font: 30px verdana;padding: 0 0.5em;')
    title.innerHTML = 'Findings'
    let body = this.w.document.body
    body.appendChild(title)
  }

  add (report) {
    let element = document.createElement('input');
    element.setAttribute('value', report)
    element.setAttribute('style', 'width:100%;padding:1em;border:0;outline:0;border-bottom:1px #eee solid;font-size: 16px;')
    let body = this.w.document.body
    body.appendChild(element)
  }
}
