//Function created to add a task to the task list
var _counter = 0;
function addTask() {
    _counter++;
    var oClone = document.getElementById("template").cloneNode(true);
    oClone.id += (_counter + "");
    document.getElementById("placeholder").appendChild(oClone);
}
//Function created to delete a task from the task list
function deleteTask() {

}