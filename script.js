function newTable(row, columns) {
    const container = document.getElementById("container");
    for (let i = 0; i < row; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let i = 0; i < columns; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}


newTable(16, 16);

const boxes = document.querySelectorAll(".box");
for(let box of boxes){
    box.addEventListener('click', function paint(){
        box.classList.toggle("painted")
    })
}