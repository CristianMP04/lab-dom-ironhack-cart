// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let priceNum = Number(price.innerText);
  let quantityNum = Number(quantity.value);
  let subtotal = priceNum * quantityNum;
  let subtotalElem = product.querySelector('.subtotal span');

  subtotalElem.innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
let sumatorio = 0;
  // ITERATION 2
  const allItems = document.querySelectorAll(".product");
  allItems.forEach((item)=>
  {
    let subtotal = updateSubtotal(item)
    sumatorio += subtotal
    console.log(subtotal);
  });
  


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
