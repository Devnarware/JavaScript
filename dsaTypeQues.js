//question - 1

/*

    function addElement(arr , val){
        // let newArr = [...arr] ;
        // newArr.push(val) ;
        return [...arr , val] ; // something new 
    }

    let arr = [1,2,3,4] ;
    let anotherArr = addElement(arr, 6) ;

*/


//question - 2 

/*

    function removeEven(nums){
        let arr = [...nums] ;


        for (let i = 0; i < arr.length; i++) {
            if(arr[i]%2 == 0){
                arr.splice(i, 1) ;
                i-- ;
            }
        }
            
        return arr ;
    }

    let arr = [1,2,2,2,2,3,4,1,13 ,15, 17, 18] ;
    let anotherArr = removeEven(arr) ;

*/

//question - 3

function increaseSalary(employees, percent){
    let updateSalary = {} ;

    for (let key in employees) {
        
        updateSalary[key] = employees[key] + (employees[key] * percent)/100 ;
        
    }

    return updateSalary ;
}

// let employees = {
    
//     Dev : Number(prompt("Enter the salary of Dev: ")) ,
//     David : Number(prompt("Enter the salary of David: ")) ,
//     Debu : Number(prompt("Enter the salary of Debu: "))

// }
// let updatedSalary = increaseSalary(employees , Number(prompt("How much percent the salary is going to increase: ")));

let a = document.querySelector('h1') ;
a.addEventListener('click' , function(){
    a.innerHTML = "hi bhaiyo"
    a.style.backgroundColor = "#2b2b2bff"
    a.style.color = "#a08436ff"

}) ;
