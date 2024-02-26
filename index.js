// var inputtext=getElemementById("input-box");
// var listitems=getElemementById("li");
var taskInput = document.getElementById("input-box");
var taskList = document.getElementById("taskli");


function addtask(){
      if(taskInput.value === ''){
        alert("enter something!");
      }
      else{
// Create a new list item and append it to the list
var listItem = document.createElement("li");
listItem.innerHTML = taskInput.value + '<button class="cross" onclick="removeTask(this)">X</button>';
listItem.addEventListener('click', toggleTask);
taskList.appendChild(listItem);
saveTasksToLocalStorage();
taskInput.value='';

      }
        
      

}

 // Function to remove a task when the cross button is clicked
 window.removeTask = function(element) {
    var li = element.parentNode;
    li.parentNode.removeChild(li);
    saveTasksToLocalStorage();
  };

  // Function to toggle the checked state of a task
  function toggleTask(event) {
    var li = event.currentTarget;
    li.classList.toggle('checked');
    saveTasksToLocalStorage();
  }

 // Save tasks to local storage
function saveTasksToLocalStorage() {
    localStorage.setItem("tasks", taskList.innerHTML);
  }
  
  // Show saved data from local storage
  function showSavedData() {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      taskList.innerHTML = savedTasks;
    }
  }
  showSavedData();