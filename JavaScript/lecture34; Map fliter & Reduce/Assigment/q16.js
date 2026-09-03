let product = ["laptop", "Mouse", "keyword"]

let totalproduct = product.reduce((accumulator, currentvalue) => {
    
  return  accumulator+1;
 } , 0)

console.log(totalproduct);
