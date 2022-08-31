var tableSize = 16;

function newTable(row, columns) {
    const container = document.getElementById("container");
    for (let i = 0; i < row; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < columns; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener('mouseover', function paint() {
                box.classList.add("painted")
            })
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}
function clear() {
    const boxes = document.querySelectorAll(".box");
    for (let box of boxes) {
        box.classList.remove("painted");
    }
}

function clearFullTable() {
    const cont = document.getElementById("container");
    cont.textContent = "";
}

function defineTableSize() {
    let sizeIsOK = false;
    tableSize = prompt("Write the number of squares of the new canvas:")
    while (sizeIsOK === false) {
        if (tableSize === null) {
            console.log("I'm a null...")
            // clearFullTable();
            // newTable(16, 16);
            sizeIsOK = true;
        } else if (tableSize > 100 || tableSize < 5) {
            tableSize = prompt("Please, choose a number between 5 and 100:")
        } else {
            clearFullTable();
            newTable(tableSize, tableSize);
            sizeIsOK = true;
        }
    }
}

newTable(16, 16);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear)

const newTableButton = document.getElementById("table");
newTableButton.addEventListener("click", defineTableSize);