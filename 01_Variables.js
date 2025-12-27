const accId = 1245
let accEmail = "dev@mail.com"
accCity = "JBP" // not recomended
var pass = 122334 // var is no longer use in js because of the SCOPE {} thing

console.log("pass = " + pass) ;


//  accId = 4123.  **** it is const so that it cant be cahnge ****
accEmail = "david@mail.com"
accCity = "seoni"

console.table([accId , accEmail , accCity]) ;


let accState // it is not define so if i try to run it it will show "undefined"
console.log(accState)