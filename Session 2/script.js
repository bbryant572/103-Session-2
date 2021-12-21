//loops
for(let i=0;i<=100;i++){
    console.log(i);
}

//display the numbers from 10 to 80 by 2
for(let j=10;j<81;j+=2){
    console.log(j);
}

//sumation from 1 to 10
let sumation=0;
for(let x=1;x<=10;x++){
    sumation=sumation+x;
}
console.log("The sumation is " + sumation);
//1+2+3+4+5+6+7+8+9+10+55
let number=0
while(number<10){
    console.log(number);
    number++;
}
let counter=0;
do{
    console.log(counter);
    counter++;
}while(counter<10);

//condition statement
if("wall in front"=="wall in front"){
    console.log("robot stop");
}else{
    console.log("walk");
}