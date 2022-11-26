document.addEventListener("DOMContentLoaded", () => {
  const createtaskform = document.getElementById("create-task-form")
  const description = document.getElementById("new-task-description")
  // const createnewtaskform = document.querySelector("submit")
  const dueDate = document.getElementById("due-date");
  const ulGoal = document.getElementById("tasks")



  createtaskform.addEventListener("submit", (e) => {
    e.preventDefault();
    var list = document.createElement("li")
    let deleteButton = document.createElement("button")
    //var x = document.getElementById("due-date").value;
    deleteButton.innerHTML = "Delete"
    ulGoal.append(list, dueDate.value, deleteButton);
    list.innerText = description.value; 
    //dueDate.value; this can be deleted later
    // description.appendChild(list); this one line messed with my head for hours
    description.value = "";
    dueDate.value = "";
    // createtaskform.submit();
    deleteButton.addEventListener("click", (e) => {
      ulGoal.remove()
      //ulGoal.removeChild(list,dueDate);
      //ulGoal.removeChild(dueDate.value);
      // dueDate.value.remove();
      //deleteButton.remove()
  })
 });
})