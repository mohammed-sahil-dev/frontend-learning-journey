let forntenttechnologies = ["HTML", "CSS", "JavaScript"]

let commaseparated = forntenttechnologies.reduce((accumulator,  currentvalue) => {
    return accumulator  +"," + currentvalue;
} )

console.log(commaseparated);
