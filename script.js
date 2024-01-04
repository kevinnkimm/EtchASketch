// Creating a 16x16 grid
let rows = 16;
let columns = 16;

const gridContainer = document.getElementById('myGrid');
const resetContainer = document.getElementById('resetBtn');
const colorContainer = document.getElementById('colorBtn');
const smallContainer = document.getElementById('16x16');
const mediumContainer = document.getElementById('32x32');
const largeContainer = document.getElementById('64x64');

// creating grid
function createGrid() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
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
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = '';
        
        gridItem.addEventListener('mousedown', () => {
            isDragging = true;
            gridItem.style.backgroundColor = 'black';
        });

        gridItem.addEventListener('mousemove', () => {
            if (isDragging) {
                gridItem.style.backgroundColor = 'black';
            }
        });
        gridItem.addEventListener('mouseup', () => {
            isDragging = false;
        });
        gridContainer.appendChild(gridItem);

    });
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
    rows = 16;
    columns = 16;
    clearGrid();
    createGrid();
}

function medium() {
    rows = 32;
    columns = 32;
    clearGrid();
    createGrid();
}

function large() {
    rows = 64;
    columns = 64;
    clearGrid();
    createGrid();
}

function main() {
    createGrid();
    resetContainer.addEventListener('click', clearReset);
    colorContainer.addEventListener('click', colors);
    smallContainer.addEventListener('click', small)
    mediumContainer.addEventListener('click', medium)
    largeContainer.addEventListener('click', large)


}

main()









