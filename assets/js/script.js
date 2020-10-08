
var formEl = document.querySelector("#task-form");
console.log(buttonE1);

var tasksToDoEl = document.querySelector("#tasks-to-do");
///task name
var taskFormHandler = function(event) {
    //check if input values are empty strings
    if (!taskTypeInput || !taskaTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

formEl.requestFullscreen(;)

    var createTaskEl = function(taskDatObj) {
        // creatlist item 
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
        
        // create div to hold task info and add to list item

        var taskInfoEl = document.creatElement ("div");
        taskInfoEl.className = "task-info";
        taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

        listItemEl.appendChild(taskInfoEl);

        //add entirelist item to list
        tasksToDoEl.appendChild(listItemEl);

    };

    event.preventDefault();
var taskNameInput = document.querySelector("input[name='task-name']").value;

    listItemEl.textContent = taskNameInput ;
    tasksToDoEl.appendChild(listItemEl)

    console.log(event);
  
};
a
