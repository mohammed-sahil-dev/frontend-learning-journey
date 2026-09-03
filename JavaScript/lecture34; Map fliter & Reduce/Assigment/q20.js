let cart = [
    {name : "Mouse", price:500, quantity:2},
    {name : "keyboard", price:1000, quantity:1}
]

let totalcart = cart.reduce((accumulator, currentitem) => {
    return accumulator + (currentitem.price * currentitem.quantity) 
}, 0)

console.log(totalcart);

