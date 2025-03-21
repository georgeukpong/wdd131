// Get the current year and update the copyright span
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Get the last modified date of the document and update the paragraph
document.getElementById("last-modified").textContent = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const navMenu = document.getElementById("nav-menu");

    hamburgerBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        // Toggle between ☰ (open) and ✖ (close)
        if (navMenu.classList.contains("active")) {
            hamburgerBtn.innerHTML = "&#10006;"; // 'X' symbol
        } else {
            hamburgerBtn.innerHTML = "&#9776;"; // Hamburger menu symbol
        }
    });
});
