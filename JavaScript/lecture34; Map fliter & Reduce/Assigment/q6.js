let product = [
    
       { name: "Laptop", price :50000},
       { name: "Mouse", price :500}
    
]

let productupdate = product.map((product) => ({...product, inStock:true }))

console.log(productupdate);
