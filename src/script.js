let container = document.querySelector(".container");
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.classList.toggle("white");
});

container.addEventListener("mouseout", (event) => {
    target = event.target;
    target.classList.toggle("red");
});
console.log(container)
console.log("running...")
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.toggle("row");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.classList.toggle("box");
        div.classList.toggle(`${i}${j}`);

        div.textContent = i;
        row.appendChild(div);
        console.log(div)
    }
}