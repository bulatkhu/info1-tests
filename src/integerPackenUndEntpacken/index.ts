const rangeA = [1, 60000];
const rangeB = [1, 500];
const rangeC = [1, 16];
const rangeD = [1, 4];
const ranges = [rangeA, rangeB, rangeC, rangeD];

function pack(a: number, b: number, c: number, d: number) {
  const items = [a, b, c, d];

  for (let index = 0; index < items.length; index++) {
    const [min, max] = ranges[index];
    const item = items[index];

    if (typeof item !== 'number') {
      throw 'Value must be an integer';
    }

    if (item < min || item > max) {
      throw 'Value is out of range';
    }
  }

  return [a, b, c, d] as const;
}

function unpack(n: readonly [number, number, number, number]) {
  return n;
}

const result = unpack(pack(1, 2, 3, 4));

console.log('result: ', result);
