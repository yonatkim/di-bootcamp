const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://job-salary-data.p.rapidapi.com/job-salary',
    params: {
        job_title: 'software engineer',
        location: 'Tel Aviv, Israel',
        radius: '200'
    },
    headers: {
        'X-RapidAPI-Key': 'db5a5bcba7msh44c963c21605d70p11e85bjsn5902b662819b',
        'X-RapidAPI-Host': 'job-salary-data.p.rapidapi.com'
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

