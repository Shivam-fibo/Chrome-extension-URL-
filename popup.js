// Save URL and redirect
document.getElementById('myButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        chrome.storage.sync.get({ urls: [] }, (data) => {
            const urls = data.urls;
            urls.push(url);
            chrome.storage.sync.set({ urls: urls }, () => {
              alert('url is saved')
            
            });
        });
    });
});

// Separate SaveButton click handler if needed
document.getElementById('SaveButton').addEventListener('click', () => {
    location.replace("./myPage.html");
});

