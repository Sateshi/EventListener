let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

h1.addEventListener('dblclick', function() {
    h1.style.color = 'white';
    h1.style.backgroundColor = 'red';
})

h3.addEventListener("mouseover",function() {
    h3.style.fontSize = '10px';
})

p.addEventListener("click",function() {
    if(p.style.backgroundColor == "blue"){
        if(p.style.color == "gold") {
            p.style.backgroundColor = "white";
            p.style.color = "black";
        }
        else{
            p.style.color = "gold";
        }
    } else{
        p.style.backgroundColor = "blue";
    }
})