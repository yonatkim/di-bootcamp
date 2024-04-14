const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const gifContainer = document.getElementById('gifContainer');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const searchQuery = searchInput.value.trim();

    if (searchQuery) {
        const gifUrl = await getRandomGifUrl(searchQuery);
        appendGifToPage(gifUrl, searchQuery);
    }
});

function getRandomGifUrl(searchQuery) {
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchQuery}`;

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.data.images.original.url)
        .catch(error => console.error('Fetch operation error: ', error));
}

function appendGifToPage(gifUrl, category) {
    const gifElement = document.createElement('div');
    gifElement.classList.add('gif-item');

    const imgElement = document.createElement('img');
    imgElement.src = gifUrl;
    imgElement.classList.add('gif-image');

    const delButton = document.createElement('button');
    delButton.textContent = 'Delete';
    delButton.classList.add('delete-button');
    delButton.addEventListener('click', function () {
        gifElement.remove();
    });

    gifElement.appendChild(imgElement);
    gifElement.appendChild(delButton);
    gifContainer.appendChild(gifElement);
}
