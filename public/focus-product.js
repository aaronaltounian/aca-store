// function to display details about a product when clicked:
const focusProduct = (index) => {
    reset();

    // deconstruct properties from the passed-in index position of products array:
    let {
        name, 
        price, 
        description, 
        imgUrl,
        } = products[index];

    // use deconstructed properties to populate some HTML:
    item.innerHTML =   `<img src=${imgUrl} />
                        <h1>${name}</h1>
                        <h2>${price}</h2>
                        <button onclick='addToCart(${index})'>Add To Cart</button>
                        <p>${description}</p>`;
}
