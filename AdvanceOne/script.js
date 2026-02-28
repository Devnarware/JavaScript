const requestUrl = 'https://api.github.com/users/Devnarware' ;
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function (){
    console.log(xhr.readyState) ;
}