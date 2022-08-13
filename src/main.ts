chrome.runtime.onMessage.addListener((message) => {
  if (message?.action == 'CREATE_WINDOW') {
    chrome.windows.create({ url: message.url, type: 'popup', height: 200, width: 200 })
  }
})
