// let userName = prompt()

// if (userName == "Admin"){

//     let password = prompt();
//     if (password == "TheMaster"){
//         alert("Welcome");
//     }
//     else if (password == null || password == ""){
//         alert("Canceled");

//     }
//     else{
//         alert ("Wrong Password");
//     }
// }
// else if (userName == null || userName == ""){
//     alert("Canceled");
// }
// else{
//     alert("I don't know you");
// }

// Forgot  to use let before variable declarations

let userName = prompt()

if (userName == "Admin"){

    let password = prompt();
    switch(password){
    case "TheMaster":
        alert("Welcome");
    break;
    case "":
        alert("Canceled");
    break;
    case null:
        alert("Canceled");
    break;
    default:
        alert ("Wrong Password");
    }
}

else if (userName == null || userName == ""){
    alert("Canceled");
}

else{
    alert("I don't know you");
}