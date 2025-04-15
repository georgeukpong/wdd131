// Get the current year and update the copyright span
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Get the last modified date of the document and update the paragraph
document.getElementById("last-modified").textContent = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    // Pre-fill form from localStorage if available
    const savedName = localStorage.getItem("fullname");
    const savedEmail = localStorage.getItem("email");

    if(savedName) document.getElementById("fullname").value = savedName;
    if(savedEmail) document.getElementById("email").value = savedEmail;

    contactForm?.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent actual submission

        // Save to localStorage
        const name = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        localStorage.setItem("fullname", name);
        localStorage.setItem("email", email);

        // Show success message
        const successMsg = document.createElement("p");
        successMsg.textContent = "Thank you for reaching out! We'll get back to you shortly.";
        successMsg.style.color = "#007B3A";
        successMsg.style.marginTop = "1rem";
        contactForm.appendChild(successMsg);


        contactForm.reset();
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".employees img");

    images.forEach(img => {
        img.addEventListener("load", () => {
            img.classList.add("loaded");
        });
    });
});