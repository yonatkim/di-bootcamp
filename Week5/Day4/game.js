document.addEventListener('DOMContentLoaded', function () {
    let noun, adjective, person, verb, place;
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        noun = document.getElementById('noun').value.trim();
        adjective = document.getElementById('adjective').value.trim();
        person = document.getElementById('person').value.trim();
        verb = document.getElementById('verb').value.trim();
        place = document.getElementById('place').value.trim();

        if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
            alert('Please fill in all fields.');
            return;
        }

        const story = `${person} went to ${place} and ${verb} a ${adjective} ${noun}.`;
        storySpan.textContent = story;
    });

    function updateStory() {
        const storyElement = document.getElementById('story');
        storyElement.textContent = getRandomStory();
    }
    document.getElementById('shuffle-button').addEventListener('click', function () {
        // Call the function to update the story
        updateStory();
    });

    function getRandomStory() {
        const stories = [
            `Once upon a time, ${person} went to ${place} and ${verb} a(n) ${adjective} ${noun}.`,
            `In a faraway land, ${person} stumbled upon ${adjective} ${place} and found a magical ${noun} which could ${verb}.`,
            `Deep in the ${place} while ${verb}ing, ${person} discovered a hidden treasure chest filled with ${adjective} ${noun}s.`,
            `In the enchanted ${place}, ${person} found a mysterious ${noun} that could  ${verb} with the power of ${adjective} magic.`,
            `On a sunny day, ${person} decided to ${verb} to ${place} and met a friendly ${noun} who shared ${adjective} stories.`,
            `High in the ${place} while ${verb}ing, ${person} stumbled upon a hidden cave filled with sparkling ${adjective} ${noun}s.`,
            `In the bustling ${place} while ${verb}ing, ${person} encountered a mischievous ${noun} who loved to play ${adjective} pranks.`,
            `Under the starry ${place}, ${person} dreamt of flying on the wings of a magnificent ${adjective} ${noun} to ${verb}.`,
            `In the vast ${place}, ${verb}ing around, ${person} discovered an ancient ${noun} that whispered secrets of ${adjective} wisdom.`,
            `At the royal ${place}, ${verb}ing around, ${person} was invited to a grand feast where they sampled ${adjective} delicacies.`,
            `During a thunderstorm while ${verb}ing, ${person} sought shelter in a cozy ${noun} and shared ${adjective} tales with strangers at ${place}.`,
            `In the haunted ${place} while ${verb}ing, ${person} encountered ghostly ${adjective} figures who danced to eerie ${noun} music.`,
            `Beneath the ocean waves, ${person} encountered a majestic ${noun} that led them on a(n) ${adjective} adventure to ${place}.`
        ];
        const randomIndex = Math.floor(Math.random() * stories.length);
        return stories[randomIndex];
    };

});
