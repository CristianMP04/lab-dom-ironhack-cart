// ITERATION 1

function updateSubtotal(product) {
  let quantity = product.querySelector(".quantity input").value
  let price = product.querySelector(".price span").textContent
  let subtotalPrice = quantity*price;
  product.querySelector(".subtotal span").textContent = subtotalPrice
  return subtotalPrice
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
let products = document.getElementsByClassName('product');
let subtotal = 0;
for (i = 0; i < products.length; i++) {
  subtotal += updateSubtotal(products[i]);
} 

let totalSub = subtotal;



  // ITERATION 2
  let totalDisplay = document.querySelector('#total-value span');
  totalDisplay.innerHTML = totalSub;
  return totalSub;
  


  // ITERATION 3

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
