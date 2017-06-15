class browser_action {
  constructor () {
    const button = document.querySelector('.js-xssradar-fuzz')
    button.addEventListener('click', this.scan)
  }

  scan () {
    chrome.tabs.query(
      { currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          function: 'scan'
        });
      }
    );

    chrome.browserAction.setIcon({path: '/icons/icon19_active.png'});

    /*results = chrome.windows.create({
      url: '/src/options/index.html',
      type: 'popup',
      width: 500,
      height: 500
    }, (w) => {
      //document.write(w)
    })*/
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  new browser_action()
  chrome.browserAction.setIcon({path: '/icons/icon19.png'});
})
