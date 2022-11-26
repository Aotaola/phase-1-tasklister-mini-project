
document.addEventListener("DOMContentLoaded", () => {


  const createtaskform = document.getElementById("create-task-form")
  const description = document.getElementById("new-task-description")
  const createnewtaskform = document.querySelector("submit")
  const ulGoal = document.getElementById("tasks")

  createtaskform.addEventListener("submit", (e) => {
    e.preventDefault();
    var list = document.createElement("li")
    ulGoal.appendChild(list);
    list.innerText = description.value;
    // description.appendChild(list);this one line messed with my head for hours 
    description.value = "";
    createnewtaskform.submit();
    list.addEventListener("remove", (e) => {
      ulGoal.removeChild(list);
})});
})


  