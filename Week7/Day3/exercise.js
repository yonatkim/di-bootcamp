document.addEventListener('DOMContentLoaded', () => {
    const fetchCharacterButton = document.getElementById('fetch-character');
    const characterInfo = document.getElementById('character-info');

    fetchCharacterButton.addEventListener('click', fetchCharacter);

    function fetchCharacter() {
        characterInfo.innerHTML = ''; // clear previous character info
        characterInfo.innerHTML = '<p id="loading">Loading...</p>'; 
        const randomNumber = Math.floor(Math.random() * 83) + 1; 
        const apiUrl = `https://www.swapi.tech/api/people/${randomNumber}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('network response was not OK');
                }
                return response.json();
            })
            .then(data => {
                displayCharacter(data.result.properties);
            })
            .catch(error => {
                console.error('error fetching character:', error);
                characterInfo.innerHTML = '<p id="error">Error fetching character. Please try again later.</p>';
            });
    }

    function displayCharacter(character) {
        characterInfo.innerHTML = `
        <div class="character-data">
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Gender: ${character.gender}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Homeworld: <a href="${character.homeworld}" target="${character.homeworld}">${character.homeworld}</a></p>
        </div>
    `;
    }
});
