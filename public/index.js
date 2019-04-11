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
const displayProducts = () => {
    resetDivs();
    products.map( (value, index) => {
        list.innerHTML += `<li> <button>Add To Cart</button> <a id='${index}' onclick='focusProduct(${index})'>${value.name}</a></li>`
    })
}

displayProducts();

// function to display details about a product when clicked:
const focusProduct = (index) => {
    resetDivs();
    item.innerHTML = products[index].name;
}



let searchBox = document.getElementById('searchBox');
let searchButton = document.getElementById('searchButton');

searchButton.onclick = function() {
    let regex = new RegExp(searchBox.value);
    if( searchBox.value.length === 0 ) alert('You must type in something to search!');
    console.log(regex);
    for( let product of products ) {
        if( product.name.match(regex) ) {
            console.log('works');
        }
    }
}