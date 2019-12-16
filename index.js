let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.getElementById("firstul");

function inputLength(){
    return input.value.length;
}
function addLiToUl(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value ='';   
}

button.addEventListener("click", function(){
    if (inputLength() > 0){
    addLiToUl();
}});

input.addEventListener("keypress", function(){
   if (inputLength() > 0 && event.key === 'Enter') {
        addLiToUl();
}});
