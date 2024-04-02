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

    // exercise 6 change the value of the id attribute to "socialNetworkNavigation"
    const navBarDiv = document.getElementById('navBar');
    if (navBarDiv) {
        navBarDiv.setAttribute('id', 'socialNetworkNavigation');
    } else {
        console.log('no <div> with id "navBar" found.');
    };
    // --3
    const newLi = document.createElement('li');
    const textNode = document.createTextNode('Logout');
    newLi.appendChild(textNode);
    const navBarUl = document.getElementById('navBar');
    if (navBarUl) {
        navBarUl.appendChild(newLi);
    } else {
        console.log('no <ul> with id "navBar" found.');
    };
    // --4
    if (navBarUl) {
        const firstLi = navBarUl.firstElementChild;
        if (firstLi) {
            console.log("text of first link:", firstLi.textContent);
        } else {
            console.log('no <li>  found in the <ul>.');
        }
        const lastLi = navBarUl.lastElementChild;
        if (lastLi) {
            console.log("text of last link:", lastLi.textContent);
        } else {
            console.log('no <li> found in the <ul>.');
        }
    } else {
        console.log('no <ul> with id "navBar" found.');
    };

    // Array of books
    const allBooks = [
        {
            title: '1984',
            author: 'George Orwell',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
            alreadyRead: true,
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Pride_and_prejudice.jpg',
            alreadyRead: true,
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/To_Kill_A_Mockingbird.jpg',
            alreadyRead: false,
        },
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Portada_de_la_novel%C2%B7la_%22The_Great_Gatsby%22.gif',
            alreadyRead: true,
        },
        {
            title: 'Harry Potter and the Prisoner of Azkaban',
            author: 'J.K. Rowling',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg" alt="Harry Potter and the Prisoner of Azkaban.jpg',
            alreadyRead: false
        }
    ];
    // exercise 7 : function to render books
    function renderBooks() {
        const listBooksSection = document.querySelector('.listBooks');
        if (listBooksSection) {
            allBooks.forEach(function (book, index) {
                const bookDiv = document.createElement('div');
                bookDiv.classList.add('book');

                // set the content of the div
                bookDiv.innerHTML = `
                <p>Title: ${book.title}</p>
                <p>Author: ${book.author}</p>
                <img src="${book.image}" alt="Book cover" style="width: 100px;">`;

                // if the book is already read, set the color of the text to royalblue
                if (book.alreadyRead) {
                    bookDiv.style.color = 'royalblue';
                }
                listBooksSection.appendChild(bookDiv);

                if (index < allBooks.length - 1) {
                    const divider = document.createElement('div');
                    divider.classList.add('book-divider');
                    listBooksSection.appendChild(divider);
                }
            });
        } else {
            console.log('No <section> with class="listBooks" found');   
        }
    };

    // Call the renderBooks function to display the books
    renderBooks();
});    