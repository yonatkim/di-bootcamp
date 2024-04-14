const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://twitter154.p.rapidapi.com/user/details',
    params: {
        username: 'alexaspez',
        //user_id: '96479162'
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
/** try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}*/