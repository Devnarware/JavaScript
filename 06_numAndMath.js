//...........PROPERTIES OF NUMBER.........
const num = new Number(1000000) ;

//1. toFixed()
// console.log(num.toFixed(1)) // ------> to give the nuber of value after a point (34.0)

//2. toLocaleString()
console.log(num.toLocaleString('en-IN')) // ------> to give the comma's for easy understanding
// inside the bracket we can change the region also

//3. toString()
console.log(typeof(num.toString())) // ------> to covert the number into the string

//4. toPrecision()
console.log(num.toPrecision(8)) // ------> whatever the number inside the bracket it will convert the main number into that times number




 

//########## PROPERTIES OF MATH FUNCTION ##########