let product = [
    
       { name: "Laptop", instock: true},
       { name: "Mouse", instock: false}
    
]

let productinstock = product.filter((product) => (product.instock))

console.log(productinstock);
