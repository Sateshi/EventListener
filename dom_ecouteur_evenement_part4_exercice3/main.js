let h1 = document.querySelector('h1');
h1.classList.add("text-blue");

let h3 = document.querySelector('h3');
h3.addEventListener('dblclick',function() {
    h3.classList.add("text-error")
})

let p = document.querySelector('p');
p.classList.toggle('text-style');

let span = document.querySelectorAll("p span");

span[0].addEventListener("click",function(){
    span[0].style.fontWeight = "bolder";
})
span[1].addEventListener("click",function(){
    span[1].style.fontWeight = "bolder";
})
span[2].addEventListener("click",function(){
    span[2].style.fontWeight = "bolder";
})

span[3].addEventListener("click",function(){
    span[3].classList.toggle("bolder-red");
    span[4].classList.remove("bolder-red");
    span[5].classList.remove("bolder-red");
})
span[4].addEventListener("click",function(){
    span[4].classList.toggle("bolder-red");
    span[3].classList.remove("bolder-red");
    span[5].classList.remove("bolder-red");
})
span[5].addEventListener("click",function(){
    span[5].classList.toggle("bolder-red");
    span[3].classList.remove("bolder-red");
    span[4].classList.remove("bolder-red");
})



