// handle search click event with regex and filter:
searchButton.onclick = function() {
    reset();
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

    if( filteredProducts.length == 0 ) { list.innerHTML = '<p>No products found.</p> <a class="back" onclick=displayProducts(products)>Go Back</a>'; }
    // re-render the list displaying only the filtered products:    
    else { displayProducts(filteredProducts); }

    // clear the search field:
    searchBox.value = '';
}