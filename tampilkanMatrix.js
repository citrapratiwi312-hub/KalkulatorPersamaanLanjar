function tampilkanMatrix(id, matrix) {
  let container = document.getElementById(id);
  container.innerHTML = "";

  matrix.forEach(row => {
    let divRow = document.createElement("div");
    divRow.className = "matrix-row";

    row.forEach(val => {
      let box = document.createElement("div");
      box.className = "matrix-box";
      box.textContent = val.toFixed(2);
      divRow.appendChild(box);
    });

    container.appendChild(divRow);
  });
}