
let container = document.querySelector("#container")

for (let i = 1; i < 16; i++) {
  let box = document.createElement("div");
  
  box.style = "border: 1px solid black; width: 100px; height: 100px";
  container.appendChild(box)

}