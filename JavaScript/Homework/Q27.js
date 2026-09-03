let electricityunits = 500;

let originalbill ;
let discount ;


if ( electricityunits >=0 && electricityunits <=100 ){
    originalbill = (electricityunits * 5);
} else if ( electricityunits >=101 && electricityunits <=200 ){
    originalbill = electricityunits * 7;
}  else {
    originalbill = electricityunits *10;
}

if (originalbill >=2000){
    discount = originalbill *10/100;
} else {
    discount = 0 ;
    
}
  

 let finalBill = originalbill - discount;

console.log("units", electricityunits);
console.log("original Bill", originalbill);
console.log("discount", discount);
console.log("Final Bill", finalBill);

