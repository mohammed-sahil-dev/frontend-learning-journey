let num1 = 20;
let num2 =50;
let choice = 1;

switch (choice) {
    case ( choice = 1):
        console.log("Add", num1 + num2);
        break;

           case ( choice =  2):
        console.log("Sub",num1 - num2);
        break;

           case ( choice =3 ):
        console.log("Mul",num1 * num2);
        break;

           case ( choice = 4):
            if (num2 === 0){
                console.log("not dividion by zero");

                
            } else {
                console.log(num1 / num2);
                
            }
        console.log("Div",num1 / num2);
        break;

           case (choice = 5):
        console.log("mod",num1 % num2);
        break;

        default:
            console.log("Invaild choice");
            
        
}
