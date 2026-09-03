let productPrice = [100, 200, 300]


let newprice = productPrice.map((productPrice) =>(productPrice * 1.10).toFixed()) 


console.log("Original:", productPrice);
console.log("New:", newprice );
