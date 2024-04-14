const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/search/search',
    params: {
        query: '#israel',
        section: 'top',
        min_retweets: '1',
        min_likes: '1',
        limit: '5',
        start_date: '2022-01-01',
        language: 'en'
    },
    headers: {
        'X-RapidAPI-Key': 'db5a5bcba7msh44c963c21605d70p11e85bjsn5902b662819b',
        'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    }
};

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// call the asynchronous function
fetchData();