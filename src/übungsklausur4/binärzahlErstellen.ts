function createNumber(bits: boolean[]) {
  let decimal = 0;
  for (let i = 0; i < bits.length; i++) {
    const reversedIndex = bits.length - i - 1;
    const bit = bits[reversedIndex];

    if (bit) {
      decimal += 2 ** reversedIndex;
    }
  }
  return decimal;
}

const result = createNumber([true, false, false, true, false, true]);

console.log('result', result);
