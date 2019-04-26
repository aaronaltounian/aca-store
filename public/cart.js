'use strict'

// function to update cart quantity displayed at top of page:
const updateQty = () => {
    // initialize variable to count cart quantity:
    let count = 0;
    // loop through cart and add the qty value of each product to the count:
    for(let product of cart) {
        count += Number(product.qty);
    }
    // return some html using ternary expression and string template literal:
    return cartQty.innerHTML = count === 1 ? `${count} item in cart.` : `${count} items in cart.`;
}

// function to add item to cart:
const addToCart = (index) => {
    // define variable to shorten DOM target:
    let itemQty = document.getElementById('itemQty');
    // add the quantity specified in the select box to the qty value of the product at the passed-in index value:
    products[index].qty += Number(itemQty.value);
    // push the item to the cart:
    cart.push(products[index])
    // remove duplicates from the cart using filter function:
    cart = cart.filter( (element, index, array) => {
                return array.indexOf(element) === index;
            })
    updateQty();
}

// function to remove item from cart:
const removeFromCart = (index) => {
    // get a product's location in the products array from the id of the product in the cart array, to update the qty in the products array (since the index in the cart array differs from the index in the products array):
    let product = products[ cart[index].id - 1 ]
    product.qty = 0;
    // splice 1 item from the array at the specified index position:
    cart.splice(index, 1);
    // update cart quantity:
    updateQty();
    // re-render the updated cart array:
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
        // since the price is stored as a string, use Number() and multiply the price times the quantity:
        total += Number(price) * Number(product.qty);
    }

    // round off the total to the 2nd decimal place:
    total = total.toFixed(2);
    return total;
}

// function to view cart:
const viewCart = () => {
    reset();
    // display message if cart is empty:
    if(cart.length === 0) list.innerHTML = `Cart is empty. <a class='back' onclick='displayProducts(products)'>Go Home</a>`
    else {
        cart.map( (value, index) => {
            // use index from map function to be able to remove item from its location in cart array, but also define an index based on the item's position within the products array in order to display details for that product when it is clicked:
            let productsIndex = value.id - 1;

            list.innerHTML += `<li>
                                    <label for="qty">Qty:</label>
                                    <input style="width:20px;" id="${index}" value=${value.qty}>
                                    <button onclick='removeFromCart(${index})'>Remove All</button>
                                    <a onclick='focusProduct(${productsIndex})'><span>${value.price}</span> ${value.name}</a>
                                </li>`;
        })
        cartTotal.innerHTML = `<h2>Cart Total: $${getTotal()}</h2>
                               <button class='cartButton' id="updateItemQty" onclick='changeQty()'>Update Cart</button>
                               <button class='cartButton' onclick='clearCart()'>Clear Cart</button>
                               <button class='checkoutButton' onclick='checkout()'>Checkout</button>`;
    }
}

// change quantity of items using input boxes when in cart view:
const changeQty = () => {
    // loop through the cart to update quantity at each position:
    for( let i = 0; i < cart.length; i++ ) {
        // define variable to hold the value of the input box at each position:
        let qty = document.getElementById(i).value;
        // define variable to hold the index position of each item within the products array:
        let productsIndex = cart[i].id - 1;
        // set the qty property of the product within the products array equal to the qty derived from the input box value:
        products[productsIndex].qty = Number(qty);
        // splice out the item from cart if qty is made 0:
        if(qty == 0) { cart.splice(i, 1); }
    }
    // rerender cart and update quantities:
    viewCart();
    updateQty();
}

// function to clear cart:
const clearCart = () => {
    // clear the cart array
    cart = [];
    // set qty of each product to 0:
    for(let product of products) {
        product.qty = 0;
    }
    updateQty();    
    viewCart();
}