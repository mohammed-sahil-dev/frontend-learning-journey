let product1 = ["iphone", 58965, 4.5]

let product2 = {

    price: 5898,
    avgrating: 4.4,
    totalRevise: 75,
    discounnt: 50,
    productName: "iphone 19 pro max",
//     printProductName: function () {
//         console.log(this.productName);

//     },
//     printDiscount() {
//         console.log(this.discounnt);

//     }
// }


}







//  console.log(Object.keys(product2));
//  console.log(Object.values(product2));
//   console.log(Object.entries(product2));



//    product2.printProductName()
//    product2.printDiscount()


  console.log(product2);

// for (value of product1){
//     console.log(value);

// product1.forEach(function(value , index){
//     console.log(value , index);
    
// })


//  for (value of product1){
//     console.log(value);
    
//  }

// for (value in product2){
//     console.log(product2[value]);
    
// }

// const [name , price] = ["iphone", 4999]
// console.log(price);


 let {price , printDiscount} = product2
 console.log(price , );

// for ([key , value]of Object.entries (product2)) {
//     console.log(key , value);
    
// }

// let arr = [54, 15, 95, 65, 75, 25, 15, 2]
// console.log(...arr);
// console.log(Math.min(...arr));

// let a = [1,5]
// let b = [10, 5]

// let c = [...a, ...b]
// console.log(...c);


 const [n, p, ...hello] = ["iphone", 4999, 786, 4.99]
console.log(hello);
