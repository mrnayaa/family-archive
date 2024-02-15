       // Function to add green overlay on hover
       function addGreenOverlayOnHover(overlay) {
        overlay.style.opacity = '1'; // Show the green overlay
    }

    // Function to remove green overlay on mouse leave
    function removeGreenOverlayOnMouseLeave(overlay) {
        overlay.style.opacity = '0'; // Hide the green overlay
    }

    // Get all the green overlays
    const overlays = document.querySelectorAll('.green-overlay');

    // Add event listeners for hover effect
    overlays.forEach(overlay => {
        overlay.parentNode.addEventListener('mouseenter', () => {
            addGreenOverlayOnHover(overlay); // Pass the overlay element to handle opacity
        });

        overlay.parentNode.addEventListener('mouseleave', () => {
            removeGreenOverlayOnMouseLeave(overlay); // Pass the overlay element to handle opacity
        });
    });