'use strict'

const cart = [];
// function to display all products on page load or when 'home' link is clicked:
const displayProducts = (products) => {
    reset();
    // map the products array and generate html for each position:
    products.map( (value) => {
        // instead of using index from the map function for ID's, use the '_id' property for each item minus 1.
        // this returns the index of the item within the original products array, even when different arrays are passed through (e.g. a search results array)
        let index = value._id - 1;

        // manipulate DOM to list out products:
        list.innerHTML += `<li>
                                <button id=${index} onclick='addToCart(${index})'>Add To Cart</button>
                                <a id='${index}' onclick='focusProduct(${index})'>${value.name}</a>
                            </li>`
    })
}

displayProducts(products);
