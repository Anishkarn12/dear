// Typing effect

const text = "Hey... I have something to tell you.";

const typingText = document.getElementById("typingText");

let index = 0;

function typeText() {

    if (index < text.length) {

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeText, 70);

    } else {

        showOpeningContent();

    }
}


// Reveal the hidden content

function showOpeningContent() {

    setTimeout(() => {
        document.getElementById("mainTitle")
            .classList.add("show");
    }, 500);


    setTimeout(() => {
        document.getElementById("mainIntro")
            .classList.add("show");
    }, 1200);


    setTimeout(() => {
        document.getElementById("openButton")
            .classList.add("show");
    }, 1900);

}


// Start animation

window.addEventListener("load", () => {

    setTimeout(typeText, 800);

});


// Open message section

function showMessage() {

    const message =
        document.getElementById("message");

    message.scrollIntoView({
        behavior: "smooth"
    });

}
// Photo reveal animation

const memoryCards = document.querySelectorAll(".memory-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

memoryCards.forEach((card) => {
    observer.observe(card);
});
// Video reveal animation

const videoCards = document.querySelectorAll(".video-card");

const videoObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

videoCards.forEach((card) => {
    videoObserver.observe(card);
});
// Final letter reveal animation

const letterLines = document.querySelectorAll(".letter-lines p");

const letterObserver = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting) {

            letterLines.forEach((line, index) => {

                setTimeout(() => {
                    line.classList.add("reveal");
                }, index * 700);

            });

            letterObserver.disconnect();
        }

    },
    {
        threshold: 0.15
    }
);

const finalLetter =
    document.querySelector(".final-letter");

if (finalLetter) {
    letterObserver.observe(finalLetter);
}
