function display(e){
    e.style.border = "1px solid red"
}

let div = document.getElementById("content");

div.addEventListener("click", function(){
    display(event.target);
})
