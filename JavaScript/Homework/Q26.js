let Choice = 3;
let quantity = 5;
let price;

switch (Choice) {
    case 1:
        console.log("Burger Selected");
        price = 150;

        break;

    case 2:
        console.log("Pizza selected");
        price = 250;
        break;

    case 3:
        console.log("Pasta Selected");

        price = 180;
        break;


    case 4:
        console.log("Sandwich Selected");

        price = 120;
        break;


 


}
    
    if (Choice >=1  && Choice <=4 && quantity > 0){
        let total = price * quantity;
        console.log("Total", total);
        
    } else {
        console.log("Inavaild choice or quantity");
        
    }

