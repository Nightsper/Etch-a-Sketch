let container = document.querySelector("#container")


let grid = 16 * 16

for (let i = 0; i < grid; i++) {
  let box = document.createElement("div");
  container.appendChild(box)
  box.setAttribute("class", "boxes")
  box.addEventListener("mouseenter", () => {box.style.backgroundColor = "orange"})
}