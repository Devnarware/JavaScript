//...........DATA TYPES.........


//number -> 2^53
//bigint 
//string --> ""
//boolean
//null   -----> standalone. ( we knowingly set it to null )---->  
//undefined  -----> it means it is undefine 

let Name = "dev" ;
let age = 34 ;
let isAdult = true ;
let qualification = null ;
let crime ;

// console.table([Name, age, isAdult, qualification, crime]) ;


// TO SEE THE TYPE OF THE VARIABLE WE USE THE typeof PROPERTY OF JS

console.log(typeof Name);
console.log(typeof age);
console.log(typeof qualification);


// templates literal ---> `any sentence or any kind of string ${any variables and calculation}`
// it use when we have to switch between string and number while initializing or printing something

let toPrint = `hello i have ${50+12} rupee in my account` ;

// console.log(toPrint);


