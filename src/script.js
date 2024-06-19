let container = document.querySelector(".container");
container.addEventListener("mouseover", (event) => {
    let target = event.target;
    let newColor = random_rgba();
    target.style.backgroundColor = newColor; 
});

container.addEventListener("mouseout", (event) => {
    target = event.target;
});

let button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("What size grid would you like?")
    destroyGrid();
    generateGrid(size);

});

function generateGrid(size) {
    if (size > 100) {
        alert("tooooooo big");
        generateGrid(16);
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
                row.appendChild(div);
        }
    }
    return;
}

function destroyGrid() {
    document.querySelector(".container").innerHTML = '';
    return;
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

generateGrid(32);