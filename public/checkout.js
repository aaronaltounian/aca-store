
const checkout = () => {
    reset()
    item.innerHTML = `<h3>Cart Total: $${getTotal()}
                      <button onclick='viewCart()'>Back to Cart</button>
                      <h2>Checkout</h1>
                      <form>
                        <input type='text' placeholder='First Name' />
                        <input type='text' placeholder='Last Name' />
                        <input type='email' placeholder='Email Address' />
                        <button type='submit'>Submit</button>
                      </form>`
}
