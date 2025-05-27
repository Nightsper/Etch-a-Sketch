let container = document.querySelector("#container")

for (let i = 0; i < 256; i++) {
  let box = document.createElement("div");
  
  box.style = "border: 1px solid black; width: 100px; height: 100px";
  container.appendChild(box)

}