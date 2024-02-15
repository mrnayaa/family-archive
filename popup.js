const grid = document.querySelector('.grid');
let currentPosition = 0;
const slideWidth = grid.clientWidth;

// Function to handle swipe left
function swipeLeft() {
    if (currentPosition < 0) {
        currentPosition += slideWidth;
        grid.style.transform = `translateX(${currentPosition}px)`;
    }
}

// Function to handle swipe right
function swipeRight() {
    if (currentPosition > -(slideWidth * 4)) {
        currentPosition -= slideWidth;
        grid.style.transform = `translateX(${currentPosition}px)`;
    }
}

// Event listeners for touch events
let startX;
let endX;

grid.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

grid.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > 50) {
        swipeRight();
    } else if (deltaX < -50) {
        swipeLeft();
    }
});
