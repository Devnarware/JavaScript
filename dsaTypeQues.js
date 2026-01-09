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

let employees = {
    
    Dev : Number(prompt("Enter the slalary of Dev: ")) ,
    David : Number(prompt("Enter the slalary of David: ")) ,
    Debu : Number(prompt("Enter the slalary of Debu: ")) 

}
let updatedSalary = increaseSalary(employees , Number(prompt("How much percent the salary is goin to increase: ")));
