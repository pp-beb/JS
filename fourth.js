let Fname="prithak";
let c=Fname.length;
console.log(c);

let objj={
    ball: "football",
    price: 2,
    price2:3,
}
console.log("The price of", objj.ball,"is $",objj.price,);
let output=`The price of ${objj.ball} is $${objj.price+objj.price2} .`;
console.log(output);
console.log("This shit is \n BASICCCC");

let A="  STrinG meTHODs  ";
console.log(A.toUpperCase());
console.log(A.toLowerCase());
console.log(A.trim());
console.log(A.slice(3,7));
console.log(A.concat(objj.ball));
console.log(A.replace('s','D'));
console.log(A.replaceAll('T','pee'));
console.log(A.charAt(5));