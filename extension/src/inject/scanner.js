class Scanner {

  constructor () {
    this.parameters = new Parameters
    this.target = document.URL
    this.fuzz()
  }

  fuzz () {
    this.parameters.get().forEach((param) => {
      console.log(this.target, param)
    })
  }
}
