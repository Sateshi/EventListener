let input = document.getElementsByTagName('input');

input[0].addEventListener("focus", function(){
    input[0].style.backgroundColor = "blue";
})

let input2 = input[1];

input2.addEventListener("focus",function(){
    input2.style.backgroundColor = "blue";
})
input2.addEventListener("focusout",function(){
    input2.style.backgroundColor = "";
})

let premierP = document.getElementsByClassName("premierParagraphe");
let secondP = document.getElementsByClassName("secondParagraphe");
let dernierP = document.getElementsByClassName("dernierParagraphe");
let exoButton = document.getElementsByClassName("buttonExo");

exoButton[0].addEventListener("click",function(){
    premierP[0].innerHTML = secondP[0].innerHTML;
    dernierP[0].innerHTML = secondP[0].innerHTML;
})

let exo4 = document.getElementById("exo4");
let textInput = document.getElementsByClassName("form-control");

exoButton[1].addEventListener("click", function(){
    exo4.innerHTML = textInput[0].value;
})

let imgResponsive = document.getElementsByClassName("img-responsive");
let img1 = imgResponsive[0]
let button = img1.nextElementSibling;

button.addEventListener("click",function(){
    img1.src = "./src/image/tartine.png"
})
let source;

imgResponsive[1].addEventListener("click",function(){
    source = imgResponsive[1].src;
})

imgResponsive[2].addEventListener("click",function(){
    imgResponsive[2].src = source;
})

let lastButton = document.querySelectorAll("Button");
lastButton = lastButton[lastButton.length - 1];
let text1 = lastButton.previousElementSibling
let text2 = lastButton.nextElementSibling;
lastButton.addEventListener("click",function(){
    let temp = text1.innerHTML;
    text1.innerHTML = text2.innerHTML;
    text2.innerHTML = temp;
})