// Set the date we're counting down to


var countDownDate = new Date("Oct 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d: " + hours + "h: "
    + minutes + "m: " + seconds + "s ";
  document.getElementById("countdown1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  document.getElementById("countdown2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  document.getElementById("countdown3").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  document.getElementById("countdown4").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  document.getElementById("countdown5").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("countdown1").innerHTML = "EXPIRED";
    document.getElementById("countdown2").innerHTML = "EXPIRED";
    document.getElementById("countdown3").innerHTML = "EXPIRED";
    document.getElementById("countdown4").innerHTML = "EXPIRED";
    document.getElementById("countdown5").innerHTML = "EXPIRED";

  }
}, 1000);







const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('#cart-close');

btnCart.addEventListener('click', () => {
  cart.classList.add('cart-active');
});

btnClose.addEventListener('click', () => {
  cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
  loadContent();

}

function loadContent() {
  //Remove Food Items  From Cart
  let btnRemove = document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn) => {
    btn.addEventListener('click', removeItem);
  });

  //Product Item Change Event
  let qtyElements = document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input) => {
    input.addEventListener('change', changeQty);
  });

  //Product Cart

  let cartBtns = document.querySelectorAll('.add-cart');
  cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);
  });

  updateTotal();
}


//Remove Item
function removeItem() {
  if (confirm('Are Your Sure to Remove')) {
    let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
    itemList = itemList.filter(el => el.title != title);
    this.parentElement.remove();
    loadContent();
  }
}

//Change Quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemList = [];

//Add Cart
function addCart() {
  let food = this.parentElement;
  let title = food.querySelector('.food-title').innerHTML;
  let price = food.querySelector('.food-price').innerHTML;
  let imgSrc = food.querySelector('.food-img').src;
  console.log(imgSrc);

  let newProduct = { title, price, imgSrc }

  //Check Product already Exist in Cart
  if (itemList.find((el) => el.title == newProduct.title)) {
    alert("Product Already added in Cart");
    return;
  } else {
    alert("added to cart")
    itemList.push(newProduct);
  }


  let newProductElement = createCartProduct(title, price, imgSrc);
  let element = document.createElement('div');
  element.innerHTML = newProductElement;
  let cartBasket = document.querySelector('.cart-content');
  cartBasket.append(element);
  loadContent();
}


function createCartProduct(title, price, imgSrc) {

  return `
    <div class="col-md-12">
    <div class="cart-box">
    <div class="col-md-3">
    <img src="${imgSrc}" class="cart-img"></div>
    <div class="detail-box">
    <div class="col-md-6 d-flex justify-content-between">
      <div class="cart-food-title">${title}</div>
      <div class="price-box"><input type="number" value="1" class="cart-quantity me-3">
        <div class="cart-price">${price}</div>
        
        </div>

        <div class="col-md-3">
         <div class="cart-amt">${price}</div></div>

     </div>
     
    </div>
    <ion-icon name="trash" class="cart-remove"></ion-icon>
  </div></div>
    `;
}

function updateTotal() {
  const cartItems = document.querySelectorAll('.cart-box');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach(product => {
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
    let qty = product.querySelector('.cart-quantity').value;
    total += (price * qty);
    product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);

  });

  totalValue.innerHTML = 'Rs.' + total;


  // Add Product Count in Cart Icon

  const cartCount = document.querySelector('.cart-count');
  let count = itemList.length;
  cartCount.innerHTML = count;

  if (count == 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'block';
  }


}