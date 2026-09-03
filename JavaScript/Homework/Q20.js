let num1 = 20;
let num2 = 0;
let operator = "/";

switch (operator) {
    case ( "+"):
        console.log("outpuut", num1 + num2);
        break;

           case ( "-"):
        console.log("output",num1 - num2);
        break;

           case ( "*"):
        console.log("output",num1 * num2);
        break;

           case ( "/"):
            if (num2 === 0){
                console.log("not dividion by zero");

                
            } else {
                console.log(num1 / num2);
                
            }
        console.log("output",num1 / num2);
        break;

           case ("%"):
        console.log("output",num1 % num2);
        break;

        default:
            console.log("Invaild opertors");
            
        
}