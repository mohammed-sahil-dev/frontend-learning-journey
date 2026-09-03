let maths = 60;
let computerscience = 65;
let science = 63;

let total = maths + computerscience + science;
let avg = total /3;
 

if (maths< 40 || computerscience < 40 || science < 40 ){
    console.log("faild");
    
} else if (avg>= 75) {
    console.log("Distinction");

} else if (avg >= 60) {
    console.log("First Division");

} else if (avg >= 50) {
    console.log("second Diivision");

} else  {
    console.log("pass");
    
}

