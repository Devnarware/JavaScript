// .........CONVERSION OF DATATYPES......



let score = "45a" ;

console.log(typeof score);
// console.log(typeof (score));  -----> WE CAN WRITE IT IN THE METHOD FROMAT AS WELL <------

// TO CONVERT ANY DATATYPE INTO OTHER WE USE THIS

let inNum = Number(score) ;

console.log(inNum);
console.log(typeof inNum);


// IN CASE OF BOOLEAN

let isTrue = 1 ;
console.log(Boolean(isTrue)); 
/*  |
    |
    +----> IT WILL GIVE FLASE TO ZERO (number wala) AND EMPTY STRING("") AND TRUE TO EVERY OTHER VALUE
*/




// ********** OPERATION ON VARIABLE ***********


/*  
        SIMPLE OPERATION
        
        a+b
        a-b
        a/b
        a*b
        a%b
        a**b ------> IT SHOWS a^b


    ***** little complex operation ******

    1 + 2 -----> 3
    "hello " + "world" ----> hello world

    BUT, when a number try to add in the string it act as a string as well 

    --> "1" + 2  == "12"
    --> 1 + "2"  == "12"
    --> "1" + 2 + 2 == "122"
    --> 1 + "2" + 2 == "122"


    ++++ BUT ++++
    --> 1 + 2 + "2" == "32" 
    *** because i think the compiler goes R to L it first add two number then see the third one is a string ***



    NOW COME TO BOOLEAN
    when we add a plus(+) before true
    --> +true == 1
    --> +false == 0
    --> +"" == 0

*/



console.log( (1 + 2 + "2" + 2));
