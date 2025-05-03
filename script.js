// The main function is the entry point of the script. It contains all the event listeners
// that define the behavior of the interactive elements on the page.
var main = function() {
    // Event listener for elements with the class 'more-btn'.
    // When a 'more-btn' is clicked, it toggles the visibility of its sibling element
    // with the class 'more-menu'.
    $('.more-btn').on('click', (event) => {
        $(event.currentTarget).siblings('.more-menu').toggle();
    });

    // Event listener for elements with the class 'share'.
    // When a 'share' element is clicked, it toggles the visibility of the next sibling element.
    $('.share').on('click', (event) => {
        $(event.currentTarget).next().toggle();
    });

    // Event listener for elements with the class 'notification'.
    // When a 'notification' element is clicked, it toggles the 'active' class on the element.
    // This can be used to visually indicate whether the notification is active or not.
    $('.notification').on('click', (event) => {
        $(event.currentTarget).toggleClass('active');
    });
};

// Ensures that the main function is executed only after the DOM is fully loaded.
// This prevents errors caused by trying to access elements that are not yet available in the DOM.
$(document).ready(main);
