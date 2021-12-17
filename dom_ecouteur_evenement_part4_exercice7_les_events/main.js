let div = document.getElementById("content");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

div.addEventListener("click", function () {
    div.style.border = "1px solid red"
    p.style.color = "red";
    p.style.fontWeight = "bold";
    h1.style.backgroundColor = "yellow"
    h2.innerHTML = h2.innerHTML.substring(0, h2.innerHTML.length - 1)
})

let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
let section = document.querySelector('section');

section.addEventListener('mouseover',function(){
    section.firstElementChild.innerHTML = text;
})
