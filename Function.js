function hitungLU() {
  let rows = document.querySelectorAll(".matrix-row");
  let A = [];

  rows.forEach(row => {
    let inputs = row.querySelectorAll("input");
    let data = [];
    inputs.forEach(input => data.push(parseFloat(input.value)));
    A.push(data);
  });

  let hasil = luDecomposition(A);

  tampilkanMatrix("matrixA", A);
  tampilkanMatrix("matrixL", hasil.L);
  tampilkanMatrix("matrixU", hasil.U);

  document.getElementById("steps").textContent = hasil.steps;
}