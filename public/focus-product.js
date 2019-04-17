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

    // create loop function to generate HTML for select input options:
    let options;
    function selectOptions() {
        for(let i = 1; i <= 10; i++) {
            options += `<option value=${i}>${i}</value>`
        }
    }
    selectOptions();
    
    // use deconstructed properties to populate some HTML:
    item.innerHTML =   `<img src=${imgUrl} />
                        <h1>${name}</h1>
                        <h2>${price}</h2>
                        <select id='itemQty'>${options}</select>
                        <button onclick='addToCart(${index})'>Add To Cart</button>
                        <p>${description}</p>`;
}
