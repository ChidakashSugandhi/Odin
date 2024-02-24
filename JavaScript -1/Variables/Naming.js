// let admin, name;
// name = "John";
// admin = name;
// alert(admin);


// let ourPlanetName = "earth";


// const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

// const age = someCode(BIRTHDAY); // make age uppercase?

// age is constant where as age in run-time, hence we don't give it a capital name

// const myInt = 5;
// const myFloat = 6.667;
// myInt;
// myFloat;


// console.log(typeof(myFloat));
// console.log(typeof(myInt));


// const lotsOfDecimal = 1.766;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(40);
// console.log(twoDecimalPlaces);

// let a = 1, b = 1;

// let c = ++a; // 2   
// let d = b++; // 1
// console.log(a,b,c,d);

// "" + 1 + 0 = "10"
// "" - 1 + 0 = 0-1+0 = -1
// true + false = 1
// 6 / "3" = 2 
// "2" * "3" = 6
// 4 + 5 + "px" = 9px
// "$" + 4 + 5 = $45
// "4" - 2 = 2
// "4px" - 2 = NaN          ***
// "  -9  " + 5 =  "- 9  5"    ***
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2  //Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// a = +a //converts a from a string to number
// b = +b //same converts string to numbner  different from b+=b
// // alert (+a + +b) same job as above, or plus can added in front of prompt in first line
// alert(a + b); // 12