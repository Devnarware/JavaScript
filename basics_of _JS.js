let a = 2 ;
let b = 3 ;

// .... IF-ELSE IN JS ....

if(a>b){
    console.log("hello") ;
}
else{
    console.log("world") ;
}


//... LOOPS ...

// ++++ FOR LOOP ++++
let ba = "" ;
for(let i = 0 ; i<5 ; i++){
    ba += i ;
    ba += " " ;
}
console.log(ba) ;

//++++ WHILE LOOP ++++
let c = "" ;
while(a<7){
    a++ ;
    c += a ;
    c += " " ;
}
console.log(c) ;


//..... FUNCTIONS IN JS .....

function car(){
    console.log("BMW M5")
}
car() ;