'use strict'

class Xsshamster {

  constructor () {
    this.listener()
  }

  listener () {
    chrome.runtime.onMessage.addListener((instruction, sender, sendResponse) => {
      console.log(instruction)
      if (this.validateInstruction(instruction)) {
        this.execute(instruction)
      } else {
        console.error('Invalid instruction', instruction)
      }
    })
  }

  execute (instruction) {
    this[instruction.function]()
  }

  validateInstruction (instruction) {
    return typeof instruction == 'object' && typeof instruction.function != 'undefined'
  }
  
  scan () {
    alert('Scan triggered.')
  }
}

new Xsshamster