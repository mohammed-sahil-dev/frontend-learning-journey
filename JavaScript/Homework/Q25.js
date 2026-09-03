let age = 12;
let tickets = 5;



if (age <= 0) {
    console.log("invaild age");

} else if (age < 12) {
    total = tickets * 100;

} else if (age >= 12) {
    total = tickets * 200;

} else if (age >= 60) {
    total = tickets * 120;

} else {

    console.log("Ticket is full ");

}



console.log("Tota", total);
