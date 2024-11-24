let sum;
for(let i=1;i<=5;i++){
     sum=+i;
}
console.log("The sum of first 5 natural numbers is: ", sum);
let string="prithak";
for (let i of string) {
    console.log(i);
}
let string1="whatwhat";
let count=0;
for (let i of string1) {
    console.log(i);
    count++;
}
console.log("The string1 has ",count," elements.");

let myclass={
    Fname :"prithak",
    roll : 22,
}
for (let j in myclass) {
   console.log(j);
   console.log(myclass[j]);
}