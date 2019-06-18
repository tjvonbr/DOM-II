// Mouseover & Mouse Out

let navLinks = document.querySelectorAll("nav a");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("mouseover", (event) => {
            event.target.style.color = "yellow";
        })
        navLinks[i].addEventListener("mouseleave", (event) => {
            event.target.style.color = "black";
        })

        // Doubleclick

        navLinks[i].addEventListener("dblclick", (event) => {
            window.alert("Sorry.  You can't do that.");
        })
    }

let mainImages = document.querySelectorAll("img");
    for (let i = 0; i < mainImages.length; i++) {
        mainImages[i].addEventListener("mouseenter", (event) => {
            mainImages[i].classList.add("img-hover");
        })

    for (let i = 0; i < mainImages.length; i++) {
        mainImages[i].addEventListener("mouseout", (event) => {
            mainImages[i].classList.remove("img-hover");
        })
    }
    }

// Keydown
let body = document.querySelector("body");

body.addEventListener("keydown", (event) => {
    window.alert("We're sorry.  We didn't catch that.  Would you like to speak with an agent?");
});

// Load

welcomeTitle = document.querySelector(".logo-heading");

window.addEventListener("load", (event) => {
    welcomeTitle.textContent = "Welcome to Fun Bus!";
});

// Scroll

window.addEventListener("scroll", (event) => {
    welcomeTitle.textContent = "Fun Bus";
})

// Click

dontLeaveButton = document.querySelectorAll(".btn")

dontLeaveButton[0].addEventListener("click", (event) => {
    window.prompt("Great!  Would you like us to find the most exotic beaches for you?");
});

dontLeaveButton[1].addEventListener("click", (event) => {
    window.prompt("Great!  Are you interested in climbing through the Rockies?");
});

dontLeaveButton[2].addEventListener("click", (event) => {
    window.prompt("Great!  Would you be interested in renting out your own island for a week?");
});

