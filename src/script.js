let container = document.querySelector(".container");
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.classList.add("white"); // can use toggle() to have on/off func
});

container.addEventListener("mouseout", (event) => {
    target = event.target;
    //target.classList.toggle("red");
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("button clicked");
    let size = prompt("What size grid would you like?")
    destroyGrid();
    generateGrid(size);

});
console.log(container)
console.log("running...")

function generateGrid(size) {
    if (size > 100) {
        alert("tooooooo big");
        return;
    }
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.toggle("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.classList.toggle("box");
            div.classList.toggle(`${i}${j}`);
    
            // div.textContent = i;
            row.appendChild(div);
            console.log(div)
        }
    }
    return;
}

function destroyGrid() {
    document.querySelector(".container").innerHTML = '';
    return;
}

generateGrid(32);