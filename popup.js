document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('webonoff');

  // 초기 on/off 상태 확인
  chrome.runtime.sendMessage({action: 'getwebDisplayStatus'}, function(response) {
    var iswebDisplayEnabled = response.isEnabled;
    toggleButton.checked = iswebDisplayEnabled ? true : false;
    if (iswebDisplayEnabled) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: enablewebDisplay
        });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: disablewebDisplay
        });
      });
    }
  });

  // on/off 상태 변경
  toggleButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'togglewebDisplay'}, function(response) {
      var iswebDisplayEnabled = response.isEnabled;
      toggleButton.checked = iswebDisplayEnabled ? true : false;
      if (iswebDisplayEnabled) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: enablewebDisplay
          });
        });
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: disablewebDisplay
          });
        });
      }
    });
  });

  // webDisplay 활성화
  function enablewebDisplay() {
    var webElement = document.getElementById('web');
    if (webElement) {
      webElement.style.display = 'block';
    }
  }

  // webDisplay 비활성화
  function disablewebDisplay() {
    var webElement = document.getElementById('web');
    if (webElement) {
      webElement.style.display = 'none';
    }
  }

});