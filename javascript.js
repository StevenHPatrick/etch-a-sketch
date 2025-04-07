const body = document.body;
const div = document.createElement("div");

for (let i = 0; i < 16; i++){
  div.textContent = ".";
  for (let j = 0; j < 16; j++){
    const clone = div.cloneNode();
    clone.textContent = ':';
    div.appendChild(clone);
  }
  body.appendChild(div.cloneNode(true));
  div.innerHTML = "";
}
