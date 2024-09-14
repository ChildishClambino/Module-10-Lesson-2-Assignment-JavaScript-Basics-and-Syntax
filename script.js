let isLoggedIn = true; 


const products = [
    { name: 'wipes', price: 5 },
    { name: 'diapers', price: 5 },
    { name: 'cups', price: 3 }
];


console.log("Available Products:");
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} - $${products[i].price}`);
}


let cart = [];


function addToCart(productName) {
    if (!isLoggedIn) {
        console.log("Please log in to add items to your cart.");
        return;
    }

    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            cart.push(products[i]);
            console.log(`${products[i].name} has been added to your cart.`);
            return;
        }
    }
    console.log("Product not found.");
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    console.log(`Total cost: $${total}`);
}

addToCart('wipes'); 
addToCart('diapers');
calculateTotal(); 

