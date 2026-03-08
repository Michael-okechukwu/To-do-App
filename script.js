const inputBox = document.getElementById("todo-entry");
const descInput = document.getElementById("description");
const passwordInput = document.getElementById("password");
const timerInput = document.getElementById("timer");
const listContainer = document.getElementById("list-container");

function startTimer(timerSpan, minutesNumber, title) {
    let remainingSeconds = minutesNumber * 60;

    function render() {
        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;
        timerSpan.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        
    }

    render();

    const intervalId = setInterval(function () {
        remainingSeconds--;

        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            timerSpan.textContent = "0:00";
            alert("Task up: " + title);
        } else {
            render();
        }
    }, 1000);
}

//function to add tasks ...li is list
function addTask(event) {
    if (event) {
        event.preventDefault();
    }

    const title = inputBox.value.trim();
    const desc = descInput.value.trim();
    const password = passwordInput.value.trim();
    const timerMinutes = timerInput.value.trim();

    if (!title || !desc || !password || !timerMinutes) {
        alert("Please fill in all the fields.");
        return;
    }

    if (password !== "1234") {
        alert("Incorrect password.");
        return;
    }

    const minutesNumber = Number(timerMinutes);
    if (isNaN(minutesNumber) || minutesNumber <= 0) {
        alert("Please enter a valid timer in minutes (greater than 0).");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `<strong>${title}</strong> - ${desc}`;

    const deleteSpan = document.createElement("span");
    deleteSpan.className = "delete-icon";
    deleteSpan.innerHTML = "🗑";
    li.appendChild(deleteSpan);

    const timerSpan = document.createElement("span");
    timerSpan.className = "timer";
    li.appendChild(timerSpan);

    listContainer.appendChild(li);
    saveData();

    startTimer(timerSpan, minutesNumber, title);

    inputBox.value = "";
    descInput.value = "";
    passwordInput.value = "";
    timerInput.value = "";
}
//cross and delete task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN" && e.target.classList.contains("delete-icon")){
        e.target.parentElement.remove();
        saveData();
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

 