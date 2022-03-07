
//Function created to add a task to the task list
function addTask() {
    var ul = document.getElementById("userList");
    var li = document.createElement("li");
    //var children = ul.children.length + 1;
    var inputValue = document.getElementById("userInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    ul.appendChild(li)
    
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("userList").appendChild(li);
      }
      document.getElementById("userInput").value = "";

}
/*
//Function created to delete a task from the task list
function deleteTask() {

} */