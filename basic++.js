let a = [1, 2, 3, 4, 5, 6] ;
let str = "" ;
let arr = "" ;

for(let i = 0 ; i<a.length ; i++){
    arr = arr + (a[i]+2) ;
    arr += " "
}

a.forEach( function(j){
    str = str + (j*2) ;
    str += " "
}) ;

console.log(a) ;
console.log(str) ;
console.log(arr) ;


// ----- FORIN LOOP ------- IT WORKS WITH OBJECTS ONLY

let obj = {
    names : "dev" ,
    age : 20 , 
    city : "Jabalpur" 

}

for(let key in obj){
    console.log(`${key}: ${obj[key]}`) ;
}


//...... FIRST CLASS FUNCTION ......
//we can treat function as varialbe
//in js we can send a function as a parameter to the other function and use that

function func1(someFunc){
    someFunc() ;
}
function func2(){
    //some code 
    console.log("function is finished")
}

func1(func2) ;



// ............. ARRAYS IN JS ARE OBJECT ............
// how array are actually made in js
/*   let arr = [1, 2, 3, 4, 5, 6]
-------------- this is how actually array made in JS ------------------
    let arr = {
        0: 1
        1: 2
        2: 3
        3: 4
        4: 5
        5: 6
    }

    thats why we can make negative index of array in js as well

    +++++++ HOW TO CHECK IF THATS THE ARRAY OR OBJECT +++++++++
    use this
    Array.isArray([]) -------> if it is true that means it is array
*/




// ...... TO REMOVE THE PARTICULAR VARIABLE FROM THE OBJECT ........

let info = {
    naam : "Dev" , 
    age : 23 , 
    city : "Jabalpur" , 
    school : "STVM" , 
}

for (let key in info) {
    console.log(`${key}: ${info[key]}`)
}

delete info.school ;
console.log("..............................")

for (let key in info) {
    console.log(`${key}: ${info[key]}`)
}

