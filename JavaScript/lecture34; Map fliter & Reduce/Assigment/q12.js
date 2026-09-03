let product = [
    { name: "Mouse", price: 500},
    { name: "keyboard", price: 1500}
]

let greaterprice = product.filter((product) => (product.price >1000))

console.log(greaterprice);
