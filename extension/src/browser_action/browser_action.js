class browser_action {
  constructor () {
    const button = document.querySelector('.js-xsshamster-fuzz')
    button.addEventListener('click', this.scan)
  }

  scan () {
    chrome.tabs.query(
      { currentWindow: true, active: true },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          function: 'scan'
        });
      }
    );
  }
}
document.addEventListener('DOMContentLoaded', function(event) {
  new browser_action()
})
