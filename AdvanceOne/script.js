const upper = document.querySelector(".upper") ;
const userName = document.getElementById("name") ;
const follower = document.getElementById("follower") ;
const repoCount = document.getElementById("repoCount") ;


const requestUrl = 'https://api.github.com/users/hiteshchoudhary' ;
const xhr = new XMLHttpRequest();



xhr.open('GET', requestUrl)
xhr.send() ;
xhr.onreadystatechange = function (){
    
    if(xhr.readyState === 4){

        const data = JSON.parse(this.responseText) ;


        upper.style.backgroundImage = `url(${data.avatar_url})` ;
        userName.innerText = `${data.name}`
        follower.innerText = `${data.followers}`
        repoCount.innerText = `${data.public_repos}`


    }
    
}



