document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get({ urls: [] }, (data) => {
        const urls = data.urls;
        const urlList = document.getElementById('urlList');
        let count = 0; // Move count declaration outside the loop

        urls.forEach(url => {
            // Create a <p> element to wrap the link
            const pEle = document.createElement('p');

            // Create an <a> element
            const aEle = document.createElement('a');
            aEle.href = url;
            aEle.textContent = url;
            aEle.target = '_blank'; // Optional: Open in a new tab

            // Style the <a> element (optional)
            aEle.style.color = 'blue';
            aEle.style.textDecoration = 'underline';

            // Append the <a> to the <p>
            pEle.appendChild(aEle);
            
            urlList.appendChild(pEle);
            count++;
            if (count > 10) {
                const elementRemove = urlList.firstElementChild;
                elementRemove.remove();
                count--;
            }
            
        });
    });
});
