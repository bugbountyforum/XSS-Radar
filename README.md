# XSS Hamster
XSS Hamster is a tool that detects parameters and fuzzes them for cross-site scripting vulnerabilities. It's also the first tool developed by the [Bug Bounty Forum](https://bugbountyforum.com) community! 

## How do I install it?
### Supported browsers
* At present, we're only supporting the widely used **Google Chrome**.
* We hope to support Firefox in the future.

### Installation instructions
1. `git clone https://github.com/bugbountyforum/XSS-Hamster`
2. Now, visit `chrome://extensions/`
3. Enable Developer Mode (via the checkbox)
4. Select "Load Unpacked Extension"
5. Finally, locate and select the `extension` folder

## How do I use it?
Visit a target page, look for the extension, and select **Fuzz**!
<img src="example.png" alt="Screenshot of extension Fuzz window" height="450"/>

---
## How do I contribute?
* If you're a Bug Bounty Forum member, please drop @smiegles a message so you can start contributing.
* If not, feel free to get in touch via Twitter!

### Contexts and tests
We've developed contexts – and their respective tests – in a modular fashion. By doing so, we've made it easy to contribute new payloads, tests, and methodologies.

**Contexts** are found in `contexts.js` (inside `extension/src/payloads/`). (to be described)

**Tests** are found within the `playground` subdirectory. The XSS Playground contains a variety of cross-site scripting scenarios designed to ensure the tool's effectiveness. At present, we test for classic vectors, JavaScript injection, tag breakouts, and templating vulnerabilities.

### Payloads
We currently support the following XSS payload classes. These can be found in [**extension/src/payloads**](https://github.com/bugbountyforum/XSS-Hamster/tree/master/extension/src/payloads).

* AngularJS
    * All versions with a vulnerable Expression Sandbox are supported
* Link-based URI
* Script injections 
* Generic tag strings

## Who made this?
This tool is a bug bounty forum project with the following contributors:
- Ibram Marzouk
- Anshuman Bhartiya
- Rafal Janicki
- Jack Cable
- Filipe Reis
- gradius
- Olivier beg
