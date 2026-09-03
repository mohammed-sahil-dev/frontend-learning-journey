let studentName = "sahil";
let rollNumber = 70 ;
let mathMarks = 80 ;
let scienceMarks = 85 ;
let englishMarks = 90 ; 


let total = (mathMarks + scienceMarks +  englishMarks) ;
let percentage = total / 300 *100;

console.log("Name", studentName);
console.log("Roll No", rollNumber);
console.log("Math", mathMarks);
console.log("Science", scienceMarks);
console.log("English", englishMarks);
 console.log("Total", total);
 console.log("Percentage", percentage);


    
 if (percentage >= 90 && percentage  <=100){
    console.log("Grade : A");
    
}else if (percentage >=80){
    console.log("Grade : B");
    
}else if (percentage >=70){
    console.log("Grade : C");
    
}else if (percentage >=60){
    console.log("Grade : D");
    
}else if (percentage >=40){
    console.log("Grade : E");
    
}else if (percentage <40){
    console.log("Faild");
    

  
}else {
    console.log("invalid grade");
    
}

 if  (mathMarks >=40 && scienceMarks >= 40 && englishMarks >= 40){
    console.log("Result : PASS");
    
 } else {
    console.log("Result : FAIl");
    
 }


 
 

 
 
 




