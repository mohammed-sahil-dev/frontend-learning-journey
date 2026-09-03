let productprice = [500, 1200, 300]

let totalprice = productprice.reduce ((accumulator,currentvalue) => accumulator = accumulator + currentvalue,0)
  


console.log(totalprice);
