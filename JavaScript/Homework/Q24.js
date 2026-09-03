let balance = 20000;
let withdrawal = 5000;

if (withdrawal <= 0 ) {
    console.log("invaild withdrawal amount");
    
} else if (withdrawal > balance)  {
    console.log("insufficient Balance");
    
} else {
let remaining = balance - withdrawal;

console.log("Balance:", balance);
console.log("Withdrawal :", withdrawal);
console.log("withdrawal successful");
console.log("Remaining balannce:", remaining);

}
