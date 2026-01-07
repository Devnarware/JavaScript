// question on conditionals

//question - 1
//how to take input
/*

    let a = Number(prompt("enter a number:"));
    if(a>10){
        console.log("hello")
    }else{
        console.log("hey")
    }

*/



//question - 2 
//string concatenation and new method to take input
/*
    let a = Number(prompt("enter a number:"));
    let num = a + 10 ;

    if(num>20){
        console.log("hello")
    }else{
        console.log("hey")
    }

*/


//question - 3
//use of ===

    // let password = "Dev*123"
    // let pass = prompt("Enter the password: ") ;
    // if(pass == password){
    //     console.log("login successfull") ;
    // }else{
    //     console.log("access denied ❌") ;
    // }


//question - 4
//even odd

    // let num = Number(prompt("Enter a number: ")) ;
    // if(num%2 == 0){
    //     console.log("number is EVEN") ;
    // }else{
    //     console.log("number is ODD") ;
    // }


//question - 5
//grading system

let marks = Number(prompt("Enter your marks: ")) ;
if(marks > 100 ){
    console.log("Invalid Input") ;
}else if(marks > 85){
    console.log("A+") ;
}else if(marks > 70){
    console.log("A") ;
}else if(marks > 50 ){
    console.log("B") ;
}else if(marks > 33){
    console.log("C") ;
}else{
    console.log("FAIL") ;
}
