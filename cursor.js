document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    const windowWidth = window.innerWidth;
    const cursorX = e.clientX;

    cursor.style.cursor = 'none'; // Hide the default cursor

    if (cursorX < windowWidth / 2) {
        cursor.style.backgroundImage = "url('leftcursor.svg')"; /* Left cursor */
    } else {
        cursor.style.backgroundImage = "url('cursor.svg')"; /* Right cursor */
    }

    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});;

document.addEventListener('DOMContentLoaded', function() {
    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Add click event listener to the document
    document.addEventListener('click', function(event) {
        // Check if the click is on the left side of the page
        if (event.clientX < window.innerWidth / 2) {
            // Scroll to the previous spread
            window.scrollBy({ top: -viewportHeight, behavior: 'smooth' });
        } else {
            // Scroll to the next spread
            window.scrollBy({ top: viewportHeight, behavior: 'smooth' });
        }
    });
});
