'use strict'

// define function to display products by selected category:
const displayFiltered = () => {
    // define empty array to add selected items to:
    let selected = [];
    // if a category is selected:
    if(category.value) {
        products.map( (product) => {
            // if a product's category matches the selected category, push the product to the selected array:
            if(product.category === category.value) selected.push(product);
        })
        // use the displayProducts function with the selected array:
        displayProducts(selected);
    }
    // if no category is selected, display an alert message:
    else alert('You must select a category!')
}