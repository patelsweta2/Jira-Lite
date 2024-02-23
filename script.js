let addCardBtn = document.getElementById("addCard");
let todoContainer = document.getElementById("todo");

addCardBtn.addEventListener("click", addingTask);

function addingTask() {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = "Click to Edit";
  todoContainer.append(card);
  card.setAttribute("contenteditable", "true");
  card.focus();

  card.addEventListener("blur", (e) => {
    let targetCard = e.target;
    if (!targetCard.innerHTML.trim()) {
      targetCard.remove();
    }
  });

  const selector = document.createElement("select");
  selector.className = "selector";
  selector.innerHTML = `<option value="todo">ToDo</option>
    <option value="inProgress">InProgress</option> 
    <option value="done">Done</option>
    <option value="delete">Delete</option>`;
  card.append(selector);
  selector.addEventListener("change", (e) => {
    const status = e.target.value;
    if (status === "delete") {
      if (confirm("Are you sure you want to delete this task?")) {
        card.remove();
      }
    } else {
      document.getElementById(status).append(card);
    }
  });
}
