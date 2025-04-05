// Get the current year and update the copyright span
document.getElementById("copyright-year").textContent = new Date().getFullYear();

// Get the last modified date of the document and update the paragraph
document.getElementById("last-modified").textContent = "Last Modification: " + document.lastModified;

// Array of products
const products = ["Ankara Dress", "Agbada", "Senator Wear", "Kaftan", "Isi Agu"];

// Get the select element
const productSelect = document.getElementById("product");

// Populate options dynamically
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product;
    option.textContent = product;
    productSelect.appendChild(option);
});


