'use strict'
console.log(products);

// variables to store the divs used to display information:
const list = document.getElementById('list');
const item = document.getElementById('itemContainer');
const results = document.getElementById('searchResults');

// function to reset the divs on click event:
const resetDivs = () => {
    list.innerHTML = '';
    item.innerHTML = '';
    searchResults.innerHTML = '';
}

// function to display all products on page load or when 'home' link is clicked:
const displayProducts = (products) => {
    resetDivs();
    products.map( (value, index) => {
        list.innerHTML += `<li> <button>Add To Cart</button> <a id='${index}' onclick='focusProduct(${index})'>${value.name}</a></li>`
    })
}

displayProducts(products);

// function to display details about a product when clicked:
const focusProduct = (index) => {
    resetDivs();
    item.innerHTML = products[index].name;
}

let searchBox = document.getElementById('searchBox');
let searchButton = document.getElementById('searchButton');

// handle search click event with regex and filter:
searchButton.onclick = function() {
    // create local variable to store a string from searchBox's value:
    let searchText = searchBox.value;
    // make search text lower case to make it easier to compare without worry about case:
    searchText = searchText.toLowerCase();
    // define regular expression based on the search text:
    let regex = new RegExp(searchText);
    // filter the products array by using the test method to find all the product names which match the regex, and return them to a new array:
    let filteredProducts = products.filter( (product) => {
        return regex.test(product.name.toLowerCase());
    })
    // re-render the list displaying only the filtered products:
    displayProducts(filteredProducts);
}
