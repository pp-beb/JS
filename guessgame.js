let target=6;
let count=0;
while(count!==1){
let data=prompt("Guess a number between 1 to 10");
 data=Number(data);
if(data===target){
    alert("You guessed the right number.");
    count++;
}
else{
    alert("Sorry, try again");
}
}