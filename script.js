let container = document.querySelector("#container")
let changeSizeBtn = document.querySelector("#changeSize")
let blackBtn = document.querySelector("#black")
let rainbowBtn = document.querySelector("#rainbow")
let eraseBtn = document.querySelector("#erase")
let resetBtn = document.querySelector("#reset")
let customBtn = document.querySelector("#custom")
let customInputBtn = document.querySelector("#colorPicker")


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
      cells.style.backgroundColor = "black"
    })
    
    container.appendChild(cells)
    
    blackBtn.addEventListener("click", () => {
      cells.addEventListener("mouseover" && "mousedown", () => {
  cells.style.backgroundColor = "black"
})
})

rainbowBtn.addEventListener("click", () => {
  cells.addEventListener("mouseover" && "mousedown", () => {
      cells.style.backgroundColor = getRandomColor()
    })
})

customBtn.addEventListener("click", (event) => {
  
  cells.addEventListener("mouseover" && "mousedown", () => {
    cells.style.backgroundColor = event.target.value
  })
})

eraseBtn.addEventListener("click", () => {
  cells.addEventListener("mouseover" && "mousedown", () => {
      cells.style.backgroundColor = "revert"
    })
})

}}

resetBtn.addEventListener("click", () => {
  for(let cell of container.children) {
    cell.style.backgroundColor = "revert"
  }
  })

  changeSizeBtn.addEventListener("click", () => {
    let input = prompt("Enter a number between 1 to 100. For Ex. 17 equals to a 17 by 17 grid.")

    if (input > 0 && input <= 100) {
      removeGrid()
      createGrid(input)
    }
    else if (input == null || input == "") {
      return null
    }
    else(alert("The number you entered is not within 1 and 100!"))
  })



function removeGrid() {
  container.textContent = ""
}

function getRandomColor() {
  let r = (Math.floor(Math.random() * 256))
  let g = (Math.floor(Math.random() * 256))
  let b = (Math.floor(Math.random() * 256))
  return rgb(`${r}, ${g}, ${b}`)
}

createGrid(defaultSize)
