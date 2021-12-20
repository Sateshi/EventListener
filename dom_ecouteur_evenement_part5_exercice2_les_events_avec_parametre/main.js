// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"
let div = document.querySelector('div');
let input = document.querySelector('input');
let listStyle = ["border: 1px solid gold;",
                "background-color: blue;",
                "background-color: red;",
                "border: 5px dotted gold;"]
console.log(div.children)

for(let i = 0; i < div.children.length; i++){
    div.children[i].addEventListener('click',function(e) {
        console.log(div.children[i]);
    })
}

div.addEventListener("dblclick",function(e) {
    e.target.innerHTML = e.target.innerHTML.toUpperCase();
})
input.addEventListener("click",function(){
    for (let i = 0; i < div.children.length; i++){
        div.children[i].setAttribute('style',listStyle[Math.floor(Math.random() * listStyle.length)])
    }
})
