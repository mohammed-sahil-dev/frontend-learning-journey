let cart = [
    {name : "Laptop", quantity:1},
    {name : "Mouse", quantity:2}
]

let totalquantity = cart.reduce((accumulator, currentitem) => {
    return  accumulator = accumulator + currentitem.quantity
}, 0)

console.log(totalquantity);
