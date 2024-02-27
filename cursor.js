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

document.addEventListener('DOMContentLoaded', function() {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Add click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the click is on the left side of the page
        if (event.clientX < window.innerWidth / 2) {
            // Scroll to the previous spread
            window.scrollBy({ top: -viewportHeight, behavior: 'auto' });
        } else {
            // Scroll to the next spread
            window.scrollBy({ top: viewportHeight, behavior: 'auto' });
        }
    });
});

// Update document click event listener to handle horizontal scrolling
document.addEventListener('click', (e) => {
    const windowHeight = window.innerHeight;
    const clickY = e.clientY;

    if (clickY < windowHeight / 2) {
        // Clicked on the top half, scroll to previous spread
        window.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    } else {
        // Clicked on the bottom half, scroll to next spread
        window.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const spreads = document.querySelectorAll('.spread');

    spreads.forEach(spread => {
        spread.addEventListener('click', function() {
            const nextPage = parseInt(spread.getAttribute('data-page')) + 1;
            const nextSpread = document.querySelector(`.spread[data-page="${nextPage}"]`);

            if (nextSpread) {
                nextSpread.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const spreads = document.querySelectorAll('.spread');

    spreads.forEach(spread => {
        spread.addEventListener('click', function(event) {
            console.log('Spread clicked');
            const clickX = event.clientX;
            const windowWidth = window.innerWidth;

            // Check if the click is on the right cursor
            if (clickX >= windowWidth / 2) {
                // Clicked on the right cursor, scroll to the next spread
                const nextPage = parseInt(spread.getAttribute('data-page')) + 1;
                const nextSpread = document.querySelector(`.spread[data-page="${nextPage}"]`);

                if (nextSpread) {
                    nextSpread.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                // Clicked on the left cursor, scroll to the previous spread
                const prevPage = parseInt(spread.getAttribute('data-page')) - 1;
                const prevSpread = document.querySelector(`.spread[data-page="${prevPage}"]`);

                if (prevSpread) {
                    prevSpread.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const spreads = document.querySelectorAll('.spread');

    spreads.forEach(spread => {
        spread.addEventListener('click', function(event) {
            const clickX = event.clientX;
            const windowWidth = window.innerWidth;

            // Check if the click is on the right half of the screen
            if (clickX >= windowWidth / 2) {
                // Clicked on the right side, scroll to next spread
                const nextPage = parseInt(spread.getAttribute('data-page')) + 1;
                const nextSpread = document.querySelector(`.spread[data-page="${nextPage}"]`);
                
                if (nextSpread) {
                    nextSpread.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Clicked on the left side, scroll to previous spread
                const prevPage = parseInt(spread.getAttribute('data-page')) - 1;
                const prevSpread = document.querySelector(`.spread[data-page="${prevPage}"]`);

                if (prevSpread) {
                    prevSpread.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
