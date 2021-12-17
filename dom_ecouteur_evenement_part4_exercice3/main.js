let h1 = document.querySelector('h1');
h1.classList.add("text-blue");

let h3 = document.querySelector('h3');
h3.addEventListener('dblclick',function() {
    h3.classList.add("text-error")
})

let p = document.querySelector('p');
p.classList.toggle('text-style');

let span = document.querySelectorAll('span');
let span1 = p.nextElementSibling.children
span1 = Array.from(span1);

span.forEach(element => {
    element.addEventListener('click', function() {
        element.classList.add("bolder")
    })
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



