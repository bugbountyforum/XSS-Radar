class XssRadar {

  constructor() {
    this.listener()
    this.scanner = new Scanner();
  }

  listener() {
    chrome.runtime.onMessage.addListener((instruction, sender, sendResponse) => {
      if (this.validateInstruction(instruction)) {
        this.execute(instruction)
      }
    })
  }

  execute(instruction) {
    this[instruction.function]()
  }

  validateInstruction(instruction) {
    return typeof instruction == 'object' && typeof instruction.function != 'undefined'
  }

  scan() {
    this.scanner.fuzz();
  }
}

xssRadar = new XssRadar();
