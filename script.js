// Creating a 16x16 grid
let rows = 16;
let columns = 16;

const gridContainer = document.getElementById('myGrid');

function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            // leaves a trail when dragging mouse over the grid
            
            gridItem.addEventListener('mousedown', () => {
                isDragging = true;
                gridItem.style.backgroundColor = 'white';
            });

            gridItem.addEventListener('mousemove', () => {
                if (isDragging) {
                    gridItem.style.backgroundColor = 'white';
                }
            });
            gridItem.addEventListener('mouseup', () => {
                isDragging = false;
            });
            
            gridContainer.appendChild(gridItem);
        }
    }
}

createGrid();

// user pop up button

const userBtn = document.createElement('button');









