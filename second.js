let marks=prompt("Enter the marks of the student:");
if(marks>80 && marks<100){
    console.log("The grade is A");
}
else if(marks>60 && marks<80){
    console.log("The grade is B");
}
else if(marks>40 && marks<60)
{
    console.log("The grade is C");
}
else if(marks>0 && marks<40){
    console.log("The grade is F");
}
else{
    console.log("Please enter a valid value.");
}