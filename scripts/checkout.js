import {cart,removeProductById} from '../data/cart.js';
import { products, getProductById} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

const checkoutElement = document.querySelector('.js-order-summary');
  let gridHTML = ``;
  cart.forEach((cartItem,index)=>{
    const productId = cartItem.productId;
    let matchingProduct = getProductById(productId);
    console.log(matchingProduct.image);
    let html =`
  <div class="cart-item-container js-cart-item-container-${productId}">
  <div class="delivery-date">
    Delivery date: Tuesday, June 21
  </div>
  
  <div class="cart-item-details-grid">
    <img class="product-image"
      src=${matchingProduct.image}>
  
    <div class="cart-item-details">
      <div class="product-name">
        ${matchingProduct.name}
      </div>
      <div class="product-price">
        $${formatCurrency(matchingProduct.priceCents)
        }
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${cartItem.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link js-delete-link link-primary " data-product-id="${productId}">
          Delete
        </span>
      </div>
    </div>
  
    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      <div class="delivery-option">
        <input type="radio" checked
          class="delivery-option-input"
          name="delivery-option-1">
        <div>
          <div class="delivery-option-date">
            Tuesday, June 21
          </div>
          <div class="delivery-option-price">
            FREE Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-${index}">
        <div>
          <div class="delivery-option-date">
            Wednesday, June 15
          </div>
          <div class="delivery-option-price">
            $4.99 - Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="delivery-option-1">
        <div>
          <div class="delivery-option-date">
            Monday, June 13
          </div>
          <div class="delivery-option-price">
            $9.99 - Shipping
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  `
  gridHTML+=html;
  });
  checkoutElement.innerHTML = gridHTML;
  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click',()=>{
      const productId = link.dataset.productId;
      removeProductById(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
      
    })
  });

  
