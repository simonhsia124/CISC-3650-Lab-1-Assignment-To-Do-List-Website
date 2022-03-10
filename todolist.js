/* 
Simon Hsia
CISC 3650 
Professor Kletenik
To Do List Website project 
due date : 3-10-2022
*/
//Function created to add a task to the task list
function addTask() {
    let ul = document.getElementById("userList");
    let li = document.createElement("li");
    let inputValue = document.getElementById("userInput").value;
    let t = document.createTextNode(inputValue);
    li.innerHTML += "<input type = 'checkbox' id = 'checkbox' name = 'Checkbox'>"; //Creates a checkbox
    li.appendChild(t);
    //Creates the date
    li.innerHTML += "<label for='DueDate'>Due date: </label><input type='date' id='DueDate' name='DueDate'>";
    //Creates the color selector
    li.innerHTML += "<label for = 'selectColor'> Select a color to set the importance level of each task: </label> <select onchange='this.style.backgroundColor=this.value'> <option value='red'>Red </option> <option value='yellow'> Yellow</option> <option value='green'>Green</option> </select>";
    ul.appendChild(li);
    //Sends a warning message if a user doesn't type a task and creates an empty one
    if (inputValue === '') {
        alert("You must write something or you won't know what task your doing!");
      } else {
        document.getElementById("userList").appendChild(li);
      }
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