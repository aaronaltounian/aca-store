// function to display all products:
const displayProducts = (products) => {
    reset();
    // map the products array and generate html for each position:
    products.map( (product) => {
        // instead of using index from the map function for ID's, use the '_id' property for each item minus 1.
        // this returns the index of the item within the original products array, even when different arrays are passed through (e.g. a search results array)
        let index = product._id - 1;
        // manipulate DOM to list out products:
        list.innerHTML += `<li>
                                <a onclick='focusProduct(${index})'>${product.name}</a>
                            </li>`
    })
}