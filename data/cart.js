export let cart = JSON.parse(localStorage.getItem('cart')) ;
if(!cart){
  cart = [{
    productId: "bc2847e9-5323-403f-b7cf-57fde044a955",
    quantity: 1,
  }];
}
export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  saveToStorage();
}
  
 export function updateCartQuantity(){ 
       let cartQuantity = 0 ;
       cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;
       });
       let quantityEl = document.querySelector('.js-cart-quantity');
       quantityEl.innerHTML = `${cartQuantity}`
  }

  export function removeProductById(productId){
    const newCart = cart.filter(cartItem => cartItem.productId !== productId);
    cart = newCart;
    saveToStorage();
  }

 function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
  }