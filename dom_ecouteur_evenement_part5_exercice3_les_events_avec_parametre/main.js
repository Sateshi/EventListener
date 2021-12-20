function sayMyName(element) {
    alert(element.innerHTML);
}

let listLi = document.querySelectorAll("li")

// listLi.forEach(element => {
//     element.addEventListener("click",function(){
//         sayMyName(element);
//     })
// })

listLi.forEach(element => {
    element.addEventListener("dblclick",function(){
        element.innerHTML = prompt("CHANGE LE TEXT PETIT HOMME");
    })
})

let input1 = document.querySelector('#li-one');
let input2 = document.querySelector('#li-two');
let boutton = document.querySelectorAll("input")[document.querySelectorAll("input").length - 1];


boutton.addEventListener("click",function(){
    let index1;
    let index2;
    let temp;
    for(let i = 0; i < listLi.length; i++) {
        if(listLi[i].innerHTML == input1.value) {
            index1 = i;
        } else if(listLi[i].innerHTML == input2.value) {
            index2 = i;
        }
    }
    temp = listLi[index2].innerHTML;
    listLi[index2].innerHTML = listLi[index1].innerHTML;
    listLi[index1].innerHTML = temp;
})