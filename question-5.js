// Question 5: Calculating Total Price in User's Cart
function calculateTotalPrice(cart) {
    let total = 0;
    for (let item in cart){
        total+=cart[item].price*cart[item].quantity
     }
    return total
  }

   
  const cart = [
    { name: "apple", price: 10, quantity: 2 },
    { name: "banana", price: 15, quantity: 1 },
    { name: "orange", price: 5, quantity: 3 },
  ];

  console.log(calculateTotalPrice(cart))
