let iswebDisplayEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'togglewebDisplay') {
    iswebDisplayEnabled = !iswebDisplayEnabled;
    sendResponse({isEnabled: iswebDisplayEnabled});
  } else if (request.action === 'getwebDisplayStatus') {
    sendResponse({isEnabled: iswebDisplayEnabled});
  }
});
