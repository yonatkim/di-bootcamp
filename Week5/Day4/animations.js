document.addEventListener('DOMContentLoaded', function () {
    /* exercise 1 timer */
    // --1
    setTimeout(function () {
        alert("Hello World");
    }, 2000);

    // --2
    setTimeout(function () {
        var container = document.getElementById("container");
        var paragraph = document.createElement("p");
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);
    }, 2000);

    // --3
    var interval = setInterval(function () {
        var container = document.getElementById("container");
        var paragraphs = container.getElementsByTagName("p");
        if (paragraphs.length < 5) {
            var paragraph = document.createElement("p");
            paragraph.textContent = "Hello World";
            container.appendChild(paragraph);
        } else {
            clearInterval(interval);
        }
    }, 2000);

    document.getElementById("clear").addEventListener("click", function () {
        clearInterval(interval);
    });

    /* exercise 2 move the box */
    function myMove() {
        var elem = document.getElementById("animate");
        var ani = document.getElementById("ani");
        var containerWidth = ani.offsetWidth;
        var animateWidth = elem.offsetWidth;
        var pos = 0;
        var speed = 1; 
        var interval = setInterval(frame, 1); 

        function frame() {
            if (pos >= containerWidth - animateWidth) {
                clearInterval(interval); 
            } else {
                pos += speed;
                elem.style.left = pos + "px"; 
            }
        }
    }
    var moveButton = document.querySelector("#moveButton");
    if (moveButton) {
        moveButton.addEventListener("click", myMove);
    } else {
        console.error("move button not found");
    }
});
