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


// Complete Temple Data Array
const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        year: 2005,
        size: 11500,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah, United States",
        year: 1888,
        size: 74792,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        year: 2015,
        size: 96630,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        year: 2020,
        size: 6861,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        name: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        year: 1974,
        size: 156558,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        name: "Lima Perú",
        location: "Lima, Perú",
        year: 1986,
        size: 9600,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        name: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        year: 1983,
        size: 116642,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        name: "Accra Ghana",
        location: "Accra, Ghana",
        year: 2004,
        size: 17500,
        image: "https://www.churchofjesuschrist.org/imgs/7cf8e8b9e5a5a1f379d4e2c9bc2166f9c6007aca/full/400%2C250/0/default"
    },
    {
        name: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        year: 2004,
        size: 25000,
        image: "https://www.churchofjesuschrist.org/imgs/ecc2bf9dceebbd11e1f9ac07b060aed8c1970125/full/400%2C250/0/default?lang=eng"
    },
    {
        name: "Manhattan New York",
        location: "Manhattan, New York",
        year: 2004,
        size: 20630,
        image: "https://www.churchofjesuschrist.org/imgs/ca03f2dd13a611efa3f1eeeeac1e2d2d6107c483/full/400%2C250/0/default?lang=eng"
    }
];

// Function to Filter Temples Based on Category
function filterTemples(filterType) {
    let filteredTemples;

    switch (filterType) {
        case "old":
            filteredTemples = temples.filter(temple => temple.year < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(temple => temple.year > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(temple => temple.size > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(temple => temple.size < 10000);
            break;
        default: // "home" or any other case
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

function displayTemples(templeArray) {
    const container = document.getElementById('temple-container');
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    if (templeArray.length === 0) {
        container.innerHTML = '<p>No temples found for this category.</p>';
        return;
    }

    templeArray.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');

        const img = document.createElement('img');
        img.setAttribute('data-src', temple.image); // Use data-src instead of src
        img.setAttribute('alt', temple.name);
        img.classList.add('lazy-load');

        templeCard.appendChild(img);
        templeCard.innerHTML += `
            <h3>${temple.name}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.year}</p>
            <p><strong>Size:</strong> ${temple.size.toLocaleString()} sq ft</p>
        `;

        container.appendChild(templeCard);
    });

    lazyLoadImages(); // Activate lazy loading
}

// Lazy Load Function Using IntersectionObserver
function lazyLoadImages() {
    const images = document.querySelectorAll('.lazy-load');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src'); // Load the actual image
                img.removeAttribute('data-src'); // Remove data-src to avoid reloading
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '50px', threshold: 0.1 });

    images.forEach(img => observer.observe(img));
}


// Add Event Listeners to Navigation Links
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const filterType = event.target.dataset.filter;
            filterTemples(filterType);
        });
    });

    // Load all temples initially
    filterTemples("home");
});
