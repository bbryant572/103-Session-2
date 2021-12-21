let salary=0;

function EnterInformation(){
    let userName=prompt("Enter your username here: ");
    let email=prompt("Enter your email here: ");
    salary=prompt("What is your annual salary?");

    console.log(userName,email,salary);
    hello("Brett");
    annualCalculation(salary);
}

EnterInformation();

function hello(name){
    console.log("This is a function inside of a function ...." + name);
}
console.log(salary*12);

function annualCalculation(sal){
    console.log("The annual salary is: " + (sal*12));
}