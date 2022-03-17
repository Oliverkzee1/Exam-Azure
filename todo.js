const input = document.querySelector("#todo");

const submit = document.querySelector("#submit");

const list = document.querySelector("#list");

submit.addEventListener("click", function (event) {

    const todoText = input.value;

    const listItem = document.createElement("li");

    const listItemText = document.createTextNode(todoText);

    listItem.append(listItemText);

    list.append(listItem);
    input.value ="";

    console.log(todoText);
});

