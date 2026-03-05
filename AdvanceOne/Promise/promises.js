const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function(){

        // console.log("perform a async task");
        // resolve() ;
    }, 1000)
})

promise1.then(()=>{
    // console.log("promise consumed") ;
})


new Promise(function (resolve, reject){
    setTimeout(()=>{
        // console.log("async task done") ;
        resolve() ;
    }, 1000)
}).then(function (){
    // console.log("resolved") ;
})

const promise3 = new Promise(function (resolve, reject){
    setTimeout(function (){
        resolve({
            username: "dev",
            email: "user@gmail.com"
        })
    },1000)
}) ;

promise3.then(function (user){
    // console.log(user) ;
}) ;


const promise4 = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = true ;
        if(!error){
            resolve({
                username: "dev",
                email: "user@gmail.com"
            })
        }
        else{
            reject("ERROR: something is wrong") ;
        }
    }, 1000)
})

promise4.then(function (user){
    // console.log(user) ;
    return user.username ;
}).then((userName) => {
    // console.log(userName) ;
}).catch((error) => {
    // console.log(error) ;
}).finally(function (){
    // console.log("the promise id either resolve or rejected")
})


const promise5 = new Promise(function (resolve, reject){
    setTimeout(function (){
        let error = false ;
        if (!error){
            resolve({
                username: "js",
                pass: "123"
            })
        }else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
}) ;

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    }catch (error){
        console.log(error)
    }
}

consumePromise5() ;


async function getDetails(){
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json() ;
        console.log(data.followers) ;
    }
    catch (error){
        console.log(error) ;
    }
}

// getDetails() ;


fetch('https://api.github.com/users/hiteshchoudhary').then(function (response){
    return response.json() ;
}).then((data) => {
    console.log(data.followers) ;
}).catch(function (error){
    console.log(error) ;
}) ;

