function luDecomposition(A) {
  let n = A.length;
  let L = Array.from({ length: n }, () => Array(n).fill(0));
  let U = Array.from({ length: n }, () => Array(n).fill(0));
  let steps = "";

  for (let i = 0; i < n; i++) {
    // Matriks L diagonal = 1
    L[i][i] = 1;
  }

  steps += "Memulai Dekomposisi LU...\n\n";

  for (let i = 0; i < n; i++) {

    // Hitung U
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        sum += L[i][k] * U[k][j];
      }
      U[i][j] = A[i][j] - sum;

      steps += `U[${i}][${j}] = ${A[i][j]} - (${sum}) = ${U[i][j].toFixed(2)}\n`;
    }

    // Hitung L
    for (let j = i + 1; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        sum += L[j][k] * U[k][i];
      }
      L[j][i] = (A[j][i] - sum) / U[i][i];

      steps += `L[${j}][${i}] = (${A[j][i]} - ${sum}) / ${U[i][i]} = ${L[j][i].toFixed(2)}\n`;
    }

    steps += "\n";
  }

  return { L, U, steps };
}