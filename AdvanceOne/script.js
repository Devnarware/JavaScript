const upper = document.querySelector(".upper");
const userName = document.getElementById("name");
const follower = document.getElementById("follower");
const repoCount = document.getElementById("repoCount");
const input = document.querySelector("input");
const form = document.querySelector("form");
let userInput;
const box = document.querySelector(".box");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        form.requestSubmit();
    }
})
form.addEventListener("submit", function (e) {
    e.preventDefault();
    userInput = input.value;
    getApi();
    form.style.display = "none"
    box.style.display = "flex"


});

function getApi() {
    const requestUrl = `https://api.github.com/users/${userInput}`;
    const xhr = new XMLHttpRequest();


    xhr.open('GET', requestUrl)
    xhr.send();
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

            const data = JSON.parse(this.responseText);


            upper.style.backgroundImage = `url(${data.avatar_url})`;
            userName.innerText = `${data.name}`
            follower.innerText = `${data.followers}`
            repoCount.innerText = `${data.public_repos}`


        }

    }


}