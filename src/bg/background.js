
// # Block Quora Login Popup

var icons48 = chrome.extension.getURL('icons/icon48.png')

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install' || details.reason === 'update') {
    var msg = webkitNotifications.createNotification(
      icons48,
      'Please reload Quora to activate',
      'You must restart Chrome or reload Quora tabs to use this extension.  Click here to open a new tab in Quora.'
    )
    msg.show()
    msg.addEventListener('click', function() {
      msg.cancel()
      chrome.tabs.create({
        url: 'https://www.quora.com'
      })
    })
  }
})
