let button = document.querySelector(".nav-btn")
let body = document.querySelector("body")
let number = 1;

button.onclick = function() {
    number = (number + 1) % 5 + 1
    body.style.background = `url("img/${number}.jpg") no-repeat`
    console.log(number)
}