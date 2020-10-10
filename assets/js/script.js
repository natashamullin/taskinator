

var taskIdCounter = 0;
var formEl = document.querySelector("#task-form");
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");



///task name
var taskFormHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    buttonEl.addEventListener("click", function() {
        var listItemEl = document.createElement("li");
        listItemEl.className = "task-item";
        listItemEl.textContent = taskNameInput;
        tasksToDoEl.appendChild(listItemEl);
    });
    
};


var createTaskEl = function (taskDataObj) {

    // create list item

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    

//create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");

// give it a class name

taskInfoEl.className= "task-info";

//add HTML content to div 
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "<?><span class='task-type'>" + taskTypeInput + "</span>";

     listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-is", taskIdCounter);

    // increase task counter for next unique id
    taskIdCounter++;

};
var createTaskActions = function (taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    deitButtonEl.setAttribute("date-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    //create delet button
    var deleteButtonEl = document.createElement("buton");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    return actionContainerEl;

};








formEl.addEventListener("submit", taskFormHandler)