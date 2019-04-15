// create function to add products to cart:
const addToCart = (index) => {
    cart.push(products[index])

    cartQty.innerHTML = cart.length === 1 ? `${cart.length} item in cart.` : `${cart.length} items in cart.`
    console.log(cart)
}