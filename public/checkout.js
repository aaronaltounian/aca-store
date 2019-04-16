
const checkout = () => {

    item.innerHTML = `<h3>Cart Total: $${getTotal()}
                      <h2>Checkout</h1>
                      <form>
                        <input type='text' placeholder='First Name' />
                        <input type='text' placeholder='Last Name' />
                        <input type='text' placeholder='Email Address' />
                        <button type='submit'>Submit</button>
                      </form>`
}