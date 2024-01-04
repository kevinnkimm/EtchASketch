// Creating a 16x16 grid
const gridContainer = document.getElementById('myGrid');
const resetContainer = document.getElementById('resetBtn');
const colorContainer = document.getElementById('colorBtn');
const smallContainer = document.getElementById('16x16');
const mediumContainer = document.getElementById('32x32');
const largeContainer = document.getElementById('64x64');
let isDragging = true;

// creating grid
function createGrid(value) {
    let gridWidth = 30;
    gridContainer.style.gridTemplateColumns = `repeat(${value}, ${gridWidth}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${value}, ${gridWidth}px)`;
    for (let i = 0; i < value; i++) {
        for (let j = 0; j < value; j++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            // leaves a trail when dragging mouse over the grid
            
            gridItem.addEventListener('mousedown', (event) => {
                isDragging = true;
                gridItem.style.backgroundColor = 'black';
            });

            gridItem.addEventListener('mousemove', (event) => {
                if (isDragging) {
                    gridItem.style.backgroundColor = 'black';
                }
            });
            gridItem.addEventListener('mouseup', () => {
                isDragging = false;
            });
            
            gridContainer.appendChild(gridItem);
        }
    }
}

// clearing grid and resetting color to black
function clearReset() {
    clearGrid();
    createGrid(16);

}

// color options
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function colors() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mousedown', () => {
            isDragging = true;
            gridItem.style.backgroundColor = generateRandomColor();
        });

        gridItem.addEventListener('mousemove', (event) => {
            if (isDragging) {
                event.target.style.backgroundColor = generateRandomColor();
            }
        });

        gridItem.addEventListener('mouseup', () => {
            isDragging = false;
        });
    });
}
// clearing grid
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridContainer.removeChild(gridItem);
        });
}


// changing display
function small() {
    clearGrid();
    createGrid(16);
}

function medium() {
    clearGrid();
    createGrid(32);
}

function large() {
    clearGrid();
    createGrid(64);
}

function main() {
    createGrid(16);
    resetContainer.addEventListener('click', clearReset);
    colorContainer.addEventListener('click', colors);
    smallContainer.addEventListener('click', small)
    mediumContainer.addEventListener('click', medium)
    largeContainer.addEventListener('click', large)


}

main()









