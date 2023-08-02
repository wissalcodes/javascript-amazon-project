export let cart = JSON.parse(localStorage.getItem('cart')) ||  [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 6 ,
  },
  {
    productId: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    quantity: 8,
  }
];
export function addToCart(productId){
  let matchingcartItem;
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingcartItem = cartItem;
    }
   });
   if(matchingcartItem){
    matchingcartItem.quantity +=1 ;
   }
   else{
    cart.push({
      id: productId	,
      quantity: 1,
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