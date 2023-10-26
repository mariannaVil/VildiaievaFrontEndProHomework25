let image = document.querySelector("img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let imageArray = [
    "images/first.jpg",
    "images/second.jpg",
    "images/third.jpg",
    "images/fourth.jpg"
];
let currentIndex = 0;

function updateButtonVisibility() {
    prev.style.display = currentIndex === 0 ? "none" : "block";
    next.style.display = currentIndex === imageArray.length - 1 ? "none" : "block";
}

prev.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        image.src = imageArray[currentIndex];
        updateButtonVisibility();
    }
});

next.addEventListener("click", function() {
    if (currentIndex < imageArray.length - 1) {
        currentIndex++;
        image.src = imageArray[currentIndex];
        updateButtonVisibility();
    }
});

updateButtonVisibility();