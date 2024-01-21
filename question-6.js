// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
    let newArray = [];
        for (let product in products){
            if (products[product].quantity > 0){
                newArray.push(products[product])
            }
        }
    return newArray
  }

  const products = [
    { name: "apple", quantity: 2 },
    { name: "banana", quantity: 0 },
    { name: "orange", quantity: 5 },
  ];
  
  console.log(filterInStockProducts(products));
  // ผลลัพธ์ที่ได้จากการ Execute Function คือ
  // [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]