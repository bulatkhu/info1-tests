// 2) Bit setzen oder löschen
// Schreiben Sie eine Funktion function setBit(x, n, b), welche das n-te Bit des Integer x auf b setzt (b ist false oder true) und das Ergebnis zurückgibt.
function setBit(x: number, n: number, b: boolean) {
  const binaryX = x.toString(2);
  const binaryN = n.toString(2);

  console.log('bits', (1 << n).toString(2));

  console.log('X binary:', binaryX);
  console.log('N binary:   ', binaryN);

  const merged = x | n;

  console.log('Merged  :', merged.toString(2));

  return merged;
}

// setBit(10, 3, true); // 10
console.log(setBit(100, 9, true)); // Got 109, should got 612
