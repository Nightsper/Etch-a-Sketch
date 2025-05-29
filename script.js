let container = document.querySelector("#container")
let changeSizeBtn = document.querySelector("#changeSize")
let blackBtn = document.querySelector("#black")
let rainbowBtn = document.querySelector("#rainbow")
let customBtn = document.querySelector("#custom")
let inputColorPickerBtn = document.querySelector("#colorPicker")


let defaultSize = 17
let contSize = 600;

function createGrid(input) {
  
  let gridCell = contSize / input
  
  
  for (let i = 0; i < input * input; i++) {
    
    let cells = document.createElement("div");
    
    cells.style.width = `${gridCell}px`
    cells.style.height = `${gridCell}px`
    
    cells.setAttribute("class", "boxes")

cells.addEventListener("mouseover" && "mousedown", () => { 
  let colorValue = getRandomColor()
  cells.style.backgroundColor = `${colorValue}`})
    
    container.appendChild(cells)
  }
  
  changeSizeBtn.addEventListener("click", () => {
    let input = prompt("Enter a number from 1 to 100. For ex. 17 equals to a 17 x 17 grid.")
    
    if (input > 0 && input <= 100) {
      removeGrid()
      createGrid(input)
    }
    else if (input == null || input == "") {
      return null
    }
    else(alert("The number you entered is not within 1 and 100!"))
  })
  
}

function removeGrid() {
  container.textContent= ""
}

function getRandomColor () {
  let r = (Math.floor(Math.random() * 256))
  let g = (Math.floor(Math.random() * 256))
  let b = (Math.floor(Math.random() * 256))
  return `rgb(${r}, ${g}, ${b})`
}


blackBtn.addEventListener("click", () => {
  alert("Sorry! This button isn't functional yet.")
}
)

rainbowBtn.addEventListener("click", () => {
  alert("Sorry! This button isn't functional yet.")
}
)

customBtn.addEventListener("click", () => {
  alert("Sorry! This button isn't functional yet.")
}
)

inputColorPickerBtn.disabled = true;


createGrid(defaultSize)