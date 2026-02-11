let addBtn = document.getElementById("addEvent");
let title = document.getElementById("title");
let date = document.getElementById("date");
let category = document.getElementById("category");
let desc = document.getElementById("desc");
let eventList = document.getElementById("eventList");
let clearBtn = document.getElementById("clearAll");
let sampleBtn = document.getElementById("sample");

addBtn.onclick = function () {
    if (title.value === "" || date.value === "") {
        alert("Enter details");
        return;
    }

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h4>${title.value}</h4>
        <p>${date.value}</p>
        <span class="tag">${category.value}</span>
        <p>${desc.value}</p>
        <button class="delete">Delete</button>
    `;

    eventList.appendChild(card);

    title.value = "";
    date.value = "";
    desc.value = "";
};

eventList.onclick = function (e) {
    if (e.target.className === "delete") {
        e.target.parentElement.remove();
    }
};

clearBtn.onclick = function () {
    eventList.innerHTML = "";
};

sampleBtn.onclick = function () {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h4>Sample Event</h4>
        <p>2026-01-14</p>
        <span class="tag">College</span>
        <p>Lorem ipsum</p>
        <button class="delete">Delete</button>
    `;

    eventList.appendChild(card);
};
