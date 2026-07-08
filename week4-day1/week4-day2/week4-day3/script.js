const ul = document.querySelector("ul");
const button = document.querySelector("button");

let taskNumber = 1;

button.addEventListener("click", () => {

    const li = document.createElement("li");

    li.textContent = `Task ${taskNumber}`;

    taskNumber++;

    ul.append(li);

});

ul.addEventListener("click", (event) => {

    if (event.target.tagName === "LI") {

        event.target.classList.toggle("completed");

    }

});