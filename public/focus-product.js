// function to display details about a product when clicked:
const focusProduct = (index) => {
    reset();

    // deconstruct properties from the passed-in index position of products array:
    let {
        name, 
        price, 
        description, 
        imgUrl,
        reviews,
        rating,
        category
        } = products[index];

        console.log(name, price, description, imgUrl, rating, category, reviews[0].description, reviews[0].rating)

    item.innerHTML =   `<img src=${imgUrl} />
                        <h1>${name}</h1>
                        <h2>${price}</h2>
                        <button onclick='addToCart(${index})'>Add To Cart</button>
                        <p>${description}</p>

    
    `;
}
