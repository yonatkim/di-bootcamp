const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
// --1
/** const searchQuery = 'hilarious';
const rating = 'g';
const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&rating=${rating}&api_key=${apiKey}`;*/

// --2
const searchQuery = 'sun';
const limit = 10;
const offset = 2;
const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&api_key=${apiKey}`;


fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

/** exercise 3 */
async function fetchStarshipData() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data.result);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

fetchStarshipData();

/** exercise 4 */
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved'); // this is the output after 2 seconds
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
