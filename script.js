const inputBox = document.getElementById("todo-entry")
const listContainer = document.getElementById("list-container")

function addTask (){
    if(inputBox.value === ''){
        alert("You must enter a task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u{1F5D1}";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}
//cross and delete task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target. parentElement.remove();
        saveDate();
    }
}, false);
//local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//show the saved data 
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
 showTask();
