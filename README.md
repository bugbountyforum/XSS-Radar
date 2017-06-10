# XSS Hamster
XSS Hamster is a tool that detects parameters and fuzzes them for cross-site scripting vulnerabilities.

## How do I install it?
### Supported browsers
At present, we're only supporting Google Chrome because it's generally more used. We hope to support Firefox in the future.

### Installation instructions
Before starting, please clone this repository to your desired location:
* `git clone https://github.com/bugbountyforum/XSS-Hamster`

1. Visit `chrome://extensions/`
2. Enable Developer Mode (via the checkbox)
3. Select "Load Unpacked Extension"
4. Finally, locate and select the `extension` folder

## How do I use it?
![Screenshot of extension Fuzz window](example.png)
To get started, simply look for the extension icon and select **Fuzz**!

## How do I contribute?
### Contexts and tests
Contexts are... (to be described)

Tests are...

### Payloads
We currently support the following XSS payload classes. These can be found in [**extension/src/payloads**](https://github.com/bugbountyforum/XSS-Hamster/tree/master/extension/src/payloads).

* AngularJS (all versions with a vulnerable Expression Sandbox)
* Link-based URI
* Script injections 
* Generic XSS tag strings

### Who made this?
This tool is a bug bounty forum project with the following contributors:
- Ibram Marzouk
- Anshuman Bhartiya
- Rafal Janicki
- Jack Cable
- Filipe Reis
- gradius
- Olivier beg
