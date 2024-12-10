// Footer Date
document.getElementById("year").innerHTML = new Date().getFullYear();

// Mobile Hamberger Navigation
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open"); // Toggle the visibility
    });
});

// Scroll Indicator from W3Schools
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav");
    const progressContainer = document.querySelector(".progress-container");
  
    // Function to dynamically update the progress bar's position
    const updateProgressBarPosition = () => {
      const navHeight = nav.offsetHeight; // Get the height of the navigation
      progressContainer.style.top = `${navHeight}px`; // Set the progress bar below the navigation
    };
  
    // Update the position on load and when resizing the window
    updateProgressBarPosition();
    window.addEventListener("resize", updateProgressBarPosition);
  });