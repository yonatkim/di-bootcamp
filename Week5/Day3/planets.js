/* daily challenge */
document.addEventListener('DOMContentLoaded', function () {
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

    function createPlanets() {
        const listPlanetsSection = document.querySelector('.listPlanets');

        if (listPlanetsSection) {
            planets.forEach(function (planet, index) {
                const planetDiv = document.createElement('div');
                planetDiv.classList.add('planet');
                planetDiv.classList.add(`planet-${index + 1}`);
                planetDiv.textContent = planet;
                listPlanetsSection.appendChild(planetDiv);
                planetDiv.addEventListener('click', function () {
                    console.log(`Clicked on ${planet}`);
                    // Example: Add code to do something when a planet is clicked
                });

                // Bonus: Create moons for each planet
                createMoons(planetDiv, index);
            });
        } else {
            console.log('no <section> with class="listPlanets" found');
        }
    };

    // Function to create moons for each planet
    function createMoons(planetDiv, index) {
        // Array of moons for each planet
        const moons = [
            ['Moon'], // moons of Mercury
            ['Phobos', 'Deimos'], // moons of Venus
            ['Moon'], // noons of Earth
            ['Phobos', 'Deimos'], // moons of Mars
            ['Io', 'Europa', 'Ganymede', 'Callisto'], // moons of Jupiter
            ['Titan', 'Enceladus', 'Mimas', 'Rhea'], // moons of Saturn
            ['Titania', 'Oberon', 'Miranda', 'Ariel', 'Umbriel'], // moons of Uranus
            ['Triton', 'Nereid', 'Proteus'], // moons of Neptune
            ['Charon', 'Styx', 'Nix', 'Kerberos', 'Hydra'] // moons of Pluto
        ];

        moons[index].forEach(function (moon, moonIndex) {
            const moonDiv = document.createElement('div');
            moonDiv.classList.add('moon');
            moonDiv.textContent = moon;
            const topPosition = moonIndex * 35 + 20; 
            const leftPosition = moonIndex * 35 + 20; 
            moonDiv.style.top = `${topPosition}px`;
            moonDiv.style.left = `${leftPosition}px`;
            planetDiv.appendChild(moonDiv);
        });
    }
    createPlanets();
});
