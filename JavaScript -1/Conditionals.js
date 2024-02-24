// let browser = "Chrome"
// if (browser == "Edge") {
//     alert("You've got Edge");
// }
// else if (browser == "Chrome"
//         || browser == "Firefox"
//         || browser == "Safari"
//         || browser == "Opera") {
//     alert("Good job not using Edge");
// }
// else {
//     alert ("Not IE please TT")
// }

let a = +prompt('a?', '')

switch (a) {
    case 0:
        alert (0);
        break;
    case 1:
        alert (1);
        break;
    case 2:
    case 3:
        alert ('2,3');
    default:
        alert ("Outside supported range")
}

if (age>=14 && age<=90){}
if (age<14 || age>90){}
if (!(age>=14 && age<=10)){}
    // true        false
    // true        true 
    // false       false 
    // false       true

  
    

function checkAge(age) {
    return (age>18 ?  true: confirm('Did parents allow you?'));
}


function checkAge(age) {
    return (age > 18 || confirm('Did parents allow you?'));
}


function min(a,b) {
    return a>b ? b:a;
}

function pow(a,b) {
    return a**b;
}
let n = prompt ("Number");
let b = prmopt ("Base");

function showPow(a,b){
    if (b>0){
        alert (pow(a,b));
    }
    else {
        alert("Only positive Base is supported.")
    }
}