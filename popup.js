



document.getElementById('fetchTitleButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];

      console.log(activeTab);
      let title = activeTab.title;
      document.getElementById('titleDisplay').innerHTML = title;
    });
  });
  