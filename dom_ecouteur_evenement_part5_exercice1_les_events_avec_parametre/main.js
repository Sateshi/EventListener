function replaceP(pBalise,content){
    pBalise.innerHTML = content;
}

function colorMe(color,bgcolor){
    h1.style.color = color;
    h1.style.backgroundColor = bgcolor;
}
// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"
let input = document.querySelector('input');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');

input.addEventListener('click', function (){
    replaceP(p,pContent);
})

h1.addEventListener('click', function (){
    colorMe(theColor,theBackground);
})