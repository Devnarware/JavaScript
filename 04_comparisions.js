/*  .......SIMPLE COMPARISON.........
    a>b
    a<b
    a>=b
    a<+b
    a==b
    a!=b

    THESE ARE THE COMPARISION BETWEEN SAME DATATYPE

*/


/* ****** COMPARISION BETWEEN DEFFERENT DATATYPE ******
    -->"2">1 == true
    -->"2">=1 == true
    -->"2"<1 == false
    -->"2">+1 == false

    JS AUTOMATICALLY CONVERT THE DIFFERENT DATATYPE IN THE SUITABLE DATATYPE (flaw of JS)


    ______BUT IF YOUY HAVE TO COMPARE USING DATATYPE______
    USE === (triple equal to)
    --> console.log("1"===1) ;
    --> console.log("1"!==1) ;
    :-   >==, =>= (it is wrong)
    */
   

// *****    SPECIAL TYPE OF COMAPARISION.  *****


console.log(null == 0) ;  //  --> flase
console.log(null > 0) ;   //  --> flase
console.log(null >= 0) ;  //  --> true
console.log(null === 0) ;  //  --> flase (it is comaparing the type also)

console.log(undefined == 0) ;  //  --> flase
console.log(undefined > 0) ;   //  --> flase
console.log(undefined >= 0) ;  //  --> flase
console.log(undefined === 0) ;  //  --> flase (it is comaparing the type also) 





