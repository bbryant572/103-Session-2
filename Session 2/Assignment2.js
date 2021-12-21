let salePrice;
let productName;
let totalCost;
let quantity;

function salesInfo(){
    productName=prompt("Enter product name here: ");
    salePrice=prompt("Enter sale price here: ");
    quantity=prompt("Enter how many here: ");

    console.log(productName,salePrice,quantity);
    calculateTaxes(salePrice, quantity);
}

salesInfo();

function calculateTaxes(salePrice, quantity){
    var salesTax=.13;
    var totalCost=(salePrice * quantity) * (1 + salesTax);
    
    console.log("The total cost is: " + (totalCost));
}


