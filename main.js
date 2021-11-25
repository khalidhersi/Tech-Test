const logo = document.querySelector(".nav__logo");
const reset = document.querySelector(".nav__btn");
const submitBtn = document.querySelector(".main__submit");
const taskInput = document.querySelector(".main__input");
const taskOutput = document.querySelector(".section__p");
const taskSection = document.querySelector(".section-task");
const deleteBtn = document.querySelector(".delete__btn");


let listArr = []

submitBtn.addEventListener("click", () => {
    listArr.push(taskInput)
    const newTask = document.createElement("ul");
    newTask.setAttribute("class", "new__task")
    taskSection.appendChild(newTask)
    newTask.innerHTML = `<li> <input type="checkbox"> ${taskInput.value} </li>`
})