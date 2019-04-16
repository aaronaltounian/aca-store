// function to update cart quantity at top of page:
const updateQty = () => {
    return cartQty.innerHTML = cart.length === 1 ? `${cart.length} item in cart.` : `${cart.length} items in cart.`

}

// function to add item to cart:
const addToCart = (index) => {
    cart.push(products[index])
    updateQty();
}

// function to remove item from cart:
const removeFromCart = (index) => {
    cart.splice(index, 1)
    updateQty();
    viewCart(cart);
}

// function to display total price of cart:
const getTotal = () => {
    // define variable to count the total:
    let total = 0;
    // loop through cart array:
    for( let product of cart ) {
        // slice the price after the dollar sign:
        let price = product.price.slice(1);
        // since the price is stored as a string, use Number():
        total += Number(price);
    }
    // round off the total to the 2nd decimal place:
    total = total.toFixed(2);
    // display the total in the appropriate HTML element:
    cartTotal.innerHTML = `<button onclick='checkout()'>Checkout</button>
                            <button onclick='clearCart()'>Clear Cart</button>
                            Cart Total: $${total}`;
}

// function to view cart:
const viewCart = () => {
    reset();
    if(cart.length === 0) {list.innerHTML = `Cart is empty. <a class='back' onclick='displayProducts(products)'>Go Home</a>`}
    else {
        cart.map( (value, index) => {
            // use index from map function to be able to remove item from its location in cart array, but also define an index based on the item's position within the products array in order to display details for that product when it is clicked:
            let productsIndex = value._id - 1;
            list.innerHTML += `<li>
                                    <button id=${index} onclick='removeFromCart(${index})'>Remove from Cart</button>
                                    <a id='${index}' onclick='focusProduct(${productsIndex})'><span>${value.price}</span> ${value.name}</a>
                                </li>`;
        })
        // update total:
        getTotal();
    }
}

// function to clear cart:
const clearCart = () => {
    cart.length = 0;
    updateQty();
    viewCart();
}