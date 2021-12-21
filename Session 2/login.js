let user1="brett@gmail.com";
let pass1="123456";

let user2="jadro@gmail.com";
let pass2="7890";

let userName=prompt("Enter your username: ");
let password=prompt("Enter your password: ");
console.log(userName, password);

if(userName==user1 && password==pass1){
    document.write("Welcome to the system "+userName);
}else{
    console.error("incorrect credentials");
}