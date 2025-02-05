const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');
const resetButton = document.getElementById('resetButton');

let currentGridSize = 16; 

function createGrid(size) {
  container.innerHTML = ''; 
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    let darkness = 0;

    square.addEventListener('mouseover', () => {
      
      const r = Math.floor(Math.random() * 156) + 100;  
      const g = Math.floor(Math.random() * 156) + 100;  
      const b = Math.floor(Math.random() * 156) + 100;  

      darkness += 0.1;
      square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${Math.min(darkness, 1)})`;
    });

    container.appendChild(square);
  }
}

resizeButton.addEventListener('click', () => {
  let size = prompt('Enter the number of squares per side (maximum 100):');
  size = parseInt(size);

  if (size > 0 && size <= 100) {
    currentGridSize = size;
    createGrid(size);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

resetButton.addEventListener('click', () => {
  createGrid(16);
  currentGridSize = 16; 
});

createGrid(16);
