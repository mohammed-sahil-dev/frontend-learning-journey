let order = [
    {amount: 500},
    {amount: 1000},
    {amount: 750}
]

let totalorder = order.reduce((accumulator, currentamount) => {
    return accumulator = accumulator +currentamount.amount;
},0)

console.log(totalorder);
