// Get the link element for education
var educationLink = document.getElementById('educationLink');

// Add click event listener
educationLink.addEventListener('click', function(event) {
    // Prevent default anchor behavior
    event.preventDefault();

    // Get the target element to scroll to (in this case, the "education" div)
    var targetElement = document.getElementById('education');

    // Scroll to the target element
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
