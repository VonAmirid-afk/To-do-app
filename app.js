const mainList = document.querySelector(".list-task");
const btn = document.querySelector(".btn-add");
const inputTask = document.querySelector("input");

const toDoApp = () => {
  if (inputTask.value === "") {
    alert("You need to enter a task!");
    return;
  }

  const newListItem = document.createElement("li");
  mainList.prepend(newListItem);
  newListItem.innerHTML = `
 <li class="textEl"><button class="btn-check"><ion-icon id="toggler-icon" class="check-box check-box-two" name="checkmark-circle-outline"></ion-icon></button><span class="task-text"> ${inputTask.value}</span><ion-icon class="trash" name="trash-outline"></ion-icon></li>
  `;
  inputTask.value = "";

  const btnCheck = newListItem.querySelector(".btn-check");
  btnCheck.addEventListener("click", () => toggleIcon(btnCheck));

  const trashEl = mainList.querySelector(".trash");
  trashEl.addEventListener("click", () => {
    newListItem.remove();
  });
};

const toggleIcon = (btnCheck) => {
  const iconName = btnCheck.querySelector(".check-box");
  const taskText = btnCheck.nextElementSibling;

  if (iconName.getAttribute("name") === "checkmark-circle-outline") {
    iconName.setAttribute("name", "checkmark-circle");
    taskText.style.textDecoration = "line-through";
  } else {
    iconName.setAttribute("name", "checkmark-circle-outline");
    taskText.style.textDecoration = "none";
  }
};
btn.addEventListener("click", toDoApp);
