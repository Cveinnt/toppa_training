
/**
 * Handler function for when the page is scrolled
 */
function windowScrolled() {
    // TODO: Modify the zoom value below so it will increase as the user scrolls down the page
    // Let's make (zoom == 100) to represent the default 100% zoom, and (zoom == 120) to represent zoom by 120%
    // Play with window.pageYOffset a little and see what the value represents; probably console.log() the value and check the logs in the console?
    // Bonus point if you try to use Math.max() so the zoom never goes below 100 :)

    const zoom = 100;

    // TODO: Now that we have the zoom, let's set the background size of #q2-hero (which contains the doggo image)





}

// Listen for the page scroll events
window.onscroll = windowScrolled;
