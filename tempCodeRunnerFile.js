const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

inventory.apple["quantity"] = 200;
inventory.orange = {}
inventory.orange.price = 20
inventory.orange.quantity = 300


let total = 0;

for (let fruit in inventory){
  total += inventory[fruit].price*inventory[fruit].quantity
}

console.log(`Total inventory value: ${total} baht`)
