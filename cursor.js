document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    const windowWidth = window.innerWidth;
    const cursorX = e.clientX;

    // Get all elements that serve as links to other pages
    const links = document.querySelectorAll('a');

    // Check if the cursor is hovering over a link element
    let hoveringLink = false;
    links.forEach(link => {
        const rect = link.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
            hoveringLink = true;
        }
    });

    // Hide custom cursor if hovering over link elements
    if (hoveringLink) {
        cursor.style.display = 'none';
    } else {
        cursor.style.display = 'block';
        cursor.style.cursor = 'none'; // Hide the default cursor

        if (cursorX < windowWidth / 2) {
            cursor.style.backgroundImage = "url('leftcursor.svg')"; /* Left cursor */
        } else {
            cursor.style.backgroundImage = "url('cursor.svg')"; /* Right cursor */
        }

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    }
});

// Add event listener to handle flipping through spreads
document.addEventListener('click', (e) => {
    const windowWidth = window.innerWidth;
    const clickX = e.clientX;

    if (clickX < windowWidth / 2) {
        // Clicked on the left side, scroll to previous spread
        window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    } else {
        // Clicked on the right side, scroll to next spread
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('.book');

    document.addEventListener('click', function(event) {
        const isLeftClick = event.clientX < window.innerWidth / 2;

        if (isLeftClick) {
            openNextSpread();
        } else {
            openPreviousSpread();
        }
    });

    function openNextSpread() {
        book.classList.remove('open');
        void book.offsetWidth; // Trigger reflow to reset animation
        book.classList.add('open');
    }

    function openPreviousSpread() {
        book.classList.remove('open');
        void book.offsetWidth; // Trigger reflow to reset animation
        book.classList.add('open');
    }
});