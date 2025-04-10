const body = document.querySelector(".etch");
const create = document.querySelector(".grid");
const clear = document.querySelector(".clear");

const div = document.createElement("div");

let num = 0;

function clearGrid(){
  body.innerHTML = "";
}

function createGrid(){
  
  div.classList.add("row");

  for (let i = 0; i < num; i++){
    div.classList.toggle("row");
    // div.textContent = i;
    for (let j = 0; j < num; j++){
      const clone = div.cloneNode();
      clone.classList.add("items");
      clone.textContent = j;
      div.appendChild(clone);
    }
    div.classList.toggle("row");
    body.appendChild(div.cloneNode(true));
    div.innerHTML = "";
  }


  const items = document.querySelectorAll(".items");
  items.forEach(addToggle);  
}

function addToggle(item){
  item.addEventListener("mouseover", () => {
    let color = Math.floor(Math.random() * 1000000);
    console.log(color);
    item.style.backgroundColor = "#" + color;
  });
}


create.addEventListener("click", () => {
  do {
    num = prompt("How big? (<= 100)");  
  } while ((num <= 0) && (num > 100));
  clearGrid();
  createGrid();
});

clear.addEventListener("click", () => {
  clearGrid();
  createGrid();
});
