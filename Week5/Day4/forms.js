document.addEventListener('DOMContentLoaded', function () {
    // --1 exercise 1
    const h1Element = document.querySelector('article h1');
    console.log(h1Element.textContent);

    // --2
    const article = document.querySelector('article');
    const lastPar = article.lastElementChild;
    if (lastPar.tagName.toLowerCase() === 'p') {
        article.removeChild(lastPar);
    }

    // --3
    const h2Element = document.querySelector('article h2');
    h2Element.addEventListener('click', function () {
        h2Element.style.backgroundColor = 'lightred';
    });

    // --4
    const h3Element = document.querySelector('article h3');
    h3Element.addEventListener('click', function () {
        h3Element.style.display = 'none';
    });

    // --5
    const button = document.createElement('button');
    button.textContent = 'Make Text Bold';
    button.style.marginTop = '5px'; 
    button.style.marginBottom = '5px'; 
    article.appendChild(button);

    button.addEventListener('click', function () {
        const paragraphs = document.querySelectorAll('article p');
        paragraphs.forEach(function (paragraph) {
            paragraph.style.fontWeight = 'bold';
        });
    });

    button.addEventListener('click', function () {
        const paragraphs = document.querySelectorAll('article p');
        paragraphs.forEach(function (paragraph) {
            paragraph.style.fontWeight = 'bold';
        });
    });

    // --6
    h1Element.addEventListener('mouseover', function () {
        const randomSize = Math.floor(Math.random() * 101); 
        h1Element.style.fontSize = randomSize + 'px';
    });

    // --7
    const secondPar = document.querySelectorAll('article p')[1];
    secondPar.addEventListener('mouseover', function () {
        secondPar.style.transition = 'opacity 1s';
        secondPar.style.opacity = '0';
    });
    const hr1 = document.createElement('hr');
    document.querySelector('article').insertAdjacentElement('afterend', hr1);

    // exercise 2 --1
    const form = document.querySelector('form');
    console.log(form);

    // --2
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    console.log(firstNameInput, lastNameInput);

    // --3
    const firstNameInputByName = document.querySelector('input[name="firstname"]');
    const lastNameInputByName = document.querySelector('input[name="lastname"]');
    console.log(firstNameInputByName, lastNameInputByName);

    // --4
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // --5
        const firstNameValue = firstNameInput.value.trim();
        const lastNameValue = lastNameInput.value.trim();

        if (firstNameValue !== '' && lastNameValue !== '') {
            // --6
            const userList = document.querySelector('.usersAnswer');
            const liFirstName = document.createElement('li');
            const liLastName = document.createElement('li');
            liFirstName.textContent = 'First name: ' + firstNameValue;
            liLastName.textContent = 'Last name: ' + lastNameValue;
            userList.appendChild(liFirstName);
            userList.appendChild(liLastName);

            firstNameInput.value = '';
            lastNameInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });
    const hr2 = document.createElement('hr');
    document.querySelector('form').insertAdjacentElement('afterend', hr2);

    // exercise 3
    // --2
    function getBoldItems() {
        const lastDiv = document.querySelector('div');
        const strongTags = lastDiv.querySelectorAll('strong');
        return Array.from(strongTags);
    }
    // --3
    function highlight(allBoldItems) {
        allBoldItems.forEach(function (item) {
            item.style.color = 'indigo';
        });
    }
    // --4
    function returnItemsToDefault(allBoldItems) {
        allBoldItems.forEach(function (item) {
            item.style.color = 'antiquewhite';
        });
    }
    // --5
    let allBoldItems = getBoldItems();
    document.querySelector('div').addEventListener('mouseover', function () {highlight(allBoldItems);});
    document.querySelector('div').addEventListener('mouseout', function () {returnItemsToDefault(allBoldItems);});
    
    const hr3 = document.createElement('hr');
    document.querySelector('div').insertAdjacentElement('afterend', hr3);
    
    // exercise 4
    const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const radius = parseFloat(document.getElementById('radius').value);
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        document.getElementById('volume').value = volume.toFixed(2);
    });
});
