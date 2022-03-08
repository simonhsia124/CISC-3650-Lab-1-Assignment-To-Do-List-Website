
//Function created to add a task to the task list
function addTask() {
    var ul = document.getElementById("userList");
    var li = document.createElement("li");
    var createCheckbox = document.createElement('input');
    /*
    createCheckbox.type = "checkbox";
    createCheckbox.value = 1;
    createCheckbox.name = "todo[]";
    */
    
    var inputValue = document.getElementById("userInput").value;
    var t = document.createTextNode(inputValue);
    //li.appendChild(createCheckbox);
    li.innerHTML += "<input type = 'checkbox' id = 'checkbox' name = 'Checkbox'>";
    li.appendChild(t);
    li.innerHTML += "<label for='DueDate'>Due date: </label><input type='date' id='DueDate' name='DueDate'>";

    ul.appendChild(li);

    
    
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("userList").appendChild(li);
      }
      document.getElementById("userInput").value = "";

}

//Function created to delete a task from the task list
function deleteSingleTask() {
  var uList = document.getElementById("userList");
  uList.removeChild(userList.lastElementChild);

}
//Function created to delete all tasks from the task list
function deleteAllTasks() {
  var uList = document.getElementById("userList");
  uList.innerHTML = "";
}