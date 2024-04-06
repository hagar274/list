let inputBox = document.getElementById("input-box");
let todo = document.getElementById("todo");
let body = document.querySelector("body");
let mode = document.getElementById("mode");


function addTask(){
    if(inputBox.value === ''){
    alert("You Must Write Something!")
}
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todo.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
todo.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
    saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", todo.innerHTML);
}
function showTask(){
    todo.innerHTML = localStorage.getItem("data");
}
showTask();

mode.onclick = function(){
    mode.classList.toggle("active");
    body.classList.toggle("active");
}