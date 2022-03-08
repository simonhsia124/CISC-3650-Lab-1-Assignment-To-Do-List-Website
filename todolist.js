
//Function created to add a task to the task list
function addTask() {
    let ul = document.getElementById("userList");
    let li = document.createElement("li");
    let inputValue = document.getElementById("userInput").value;
    let t = document.createTextNode(inputValue);
    //li.appendChild(create Checkbox);
    li.innerHTML += "<input type = 'checkbox' id = 'checkbox' name = 'Checkbox'>";
    li.appendChild(t);
    li.innerHTML += "<label for='DueDate'>Due date: </label><input type='date' id='DueDate' name='DueDate'>";
    ul.appendChild(li);
    if (inputValue === '') {
        alert("You must write something or you won't know what task your doing!");
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