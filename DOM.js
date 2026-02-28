let btn = document.querySelector("button") ;
let bulb = document.querySelector("div") ;
let flag = 1 ;

btn.addEventListener("click" , function(){
if(flag == 1){
    bulb.style.backgroundColor = "transparent" ;
    btn.innerHTML = "ON"
    flag = 0 ;
}else{
    bulb.style.backgroundColor = "yellow" ;
    btn.innerHTML = "OFF"
    flag = 1 ;
}

}) ;
