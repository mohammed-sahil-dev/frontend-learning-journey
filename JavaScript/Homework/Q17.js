let salary = 1000000;
let Experience = 10;
let bonus;




if (Experience >= 10) {
    bonus = salary * 20 / 100;

} else if (Experience >= 5) {
    bonus = salary * 10 / 100;

} else if (Experience >= 2) {
    bonus = salary * 5 / 100;

}

else {
    bonus = 0;
}
let finalsalary = salary + bonus;

console.log("orginal salary", salary);
console.log("Bonus", bonus);
console.log("finalsalary", finalsalary);



