// Add event listener to the mobile menu button
document.getElementById("mobileMenuButton").addEventListener("click", function() {
    // Toggle the visibility of the navigation links
    document.getElementById("nav-links").classList.toggle("show");
});

// Get references to the modal and buttons
const modal = document.getElementById("welcomeModal");
const getStartedButton = document.getElementById("getStartedButton");
const closeButton = document.querySelector(".close-button");
const continueButton = document.getElementById("continueButton");

// Add event listener to the Get Started button
getStartedButton.addEventListener("click", function() {
    // Show the modal
    modal.style.display = "block";});

// Add event listener to the close button
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Add event listener to the continue button
continueButton.addEventListener("click", function() {
    modal.style.display = "none";
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
});

// Close the modal when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.project-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Loop back to the first slide
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Loop back to the last slide
    }
    showSlide(currentSlideIndex);
}

// Show the first slide initially
showSlide(currentSlideIndex);


// Select elements
const sidebar = document.getElementById("sidebar");
const toggleButton = document.getElementById("toggleSidebar");
const closeeButton = document.getElementById("closeeSidebar");

// Show sidebar and hide toggle button
toggleButton.addEventListener("click", () => {
    sidebar.classList.add("active");
    toggleButton.classList.add("hidden");
});

// Hide sidebar and show toggle button
closeeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
    toggleButton.classList.remove("hidden");
});


