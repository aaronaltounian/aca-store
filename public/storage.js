
const getStoredCart = () => {
    return JSON.parse( sessionStorage.getItem('cart') || [] );
}

const saveCart = (cart) => {
    sessionStorage.setItem( 'cart', JSON.stringify(cart) );
}

const deleteItem = (product) => {
    let index = cart.indexOf(product);
    cart.splice(index, 1);
    saveCart(cart);
}

const addItem = (product) => {
    cart.push(product);
    saveCart(cart);
}
