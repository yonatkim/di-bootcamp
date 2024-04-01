document.addEventListener('DOMContentLoaded', function () {
    // --1 retrieve the div element by its ID
    const myDiv = document.querySelector('#container');
    console.log(`the <div> with id='container' ${myDiv.innerHTML}`);
    // --1b 
    const contDiv = document.getElementById('container');
    if (contDiv) {
        console.log(`using getElementById ${contDiv.textContent.trim()}`);
    } else {
        console.log('no <div> with id "container" found.');
    };

    // --2 replace 'Pete' with 'Richard'
    const listUls = document.querySelectorAll('ul.list');
    listUls.forEach(function (ulElem) {
        const listItems = ulElem.querySelectorAll('li');
        listItems.forEach(function (liElem) {
            if (liElem.textContent === 'Pete') {
                liElem.textContent = 'Richard';
            }
        });
    });

    // --3 remove the second <ul> element within the second <ul> where class="list"
    const secondUl = document.querySelectorAll('ul.list')[1]; 
    if (secondUl) {
        const secondLi = secondUl.querySelectorAll('li')[1]; 
        if (secondLi) {
            secondLi.remove();
        } else {
            console.log('no second <li> element found in the second <ul>.');
        }
    } else {
        console.log('no second <ul> element with class "list" found.');
    };

    // --4 find the first <li> within each <ul>; change to "Yonat"
    const lstUls = document.querySelectorAll('ul.list');
    lstUls.forEach(function(ule) {
        const firstLi = ule.querySelector('li');
        if (firstLi) {
            firstLi.textContent = 'Yonat';
        }
    });

    // --5 add the class "student_list" to the current <ul> where class="list"
    const listUlElem = document.querySelectorAll('ul.list');
    listUlElem.forEach(function (ulEl) {
        ulEl.classList.add('student_list');
    });

    // --6 add the classes "university" and "attendance" to the first <ul>
    const firstListUl = document.querySelector('ul.list');
    if (firstListUl) {
        firstListUl.classList.add('university', 'attendance');
    } else {
        console.log('no <ul> element with class "list" found.');
    };
    // --7 add CSS styles to the div
    const containerDiv = document.getElementById('container');
    if (containerDiv) {
        containerDiv.style.backgroundColor = 'lightblue';
        containerDiv.style.padding = '10px'; 
    } else {
        console.log('no <div> with id "container" found.');
    };
    // --8 select the last <li> within the second <ul>; heck if contains "Dan"; hide it
    const secondListUl = document.querySelectorAll('ul.list')[1];
    if (secondListUl) {
        const lastLiElement = secondListUl.querySelector('li:last-child');
        if (lastLiElement && lastLiElement.textContent.trim() === 'Dan') {
            lastLiElement.style.display = 'none';
        } else {
            console.log('no last <li> containing "Dan" found in the second <ul>.');
        }
    } else {
        console.log('no second <ul> with class="list" found.');
    };
    // --9  select the second <li>  within the first <ul> containing "Richard"
    const firstUl = document.querySelector('ul.list:first-of-type');
    if (firstUl) {
        const richardLiElement = firstUl.querySelector('li:nth-of-type(2)');
        if (richardLiElement) {
            richardLiElement.style.border = '2px solid pink';
        } else {
            console.log('no <li> containing "Richard" found in the first <ul>.');
        }
    } else {
        console.log('no first <ul> with class="list" found.');
    };
    // --10 change the font size of the body
    document.body.style.fontSize = '18px';
});    