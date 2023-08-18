// script.js
function sendValue() {
    const inputValue = document.getElementById('inputValue').value;
  
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { value: inputValue });
    });
  }
  
  function openDisplayPage() {
    chrome.tabs.create({ url: 'display.html' });
  }
  
