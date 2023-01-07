// number of bits per range
const b0 = Math.ceil(Math.log2(59999));
const b1 = Math.ceil(Math.log2(499));
const b2 = Math.ceil(Math.log2(15));
const b3 = Math.ceil(Math.log2(3));

// number of bits to shift
const s0 = 0;
const s1 = s0 + b0;
const s2 = s1 + b1;
const s3 = s2 + b2;

export function pack(a: number, b: number, c: number, d: number): number {
  // check parameter types and ranges
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    typeof c !== 'number' ||
    typeof d !== 'number'
  ) {
    throw 'integer parameters expected';
  }
  if (a < 1 || b < 1 || c < 1 || d < 1) {
    throw 'parameter value out of range';
  }
  if (a > 60000 || b > 500 || c > 16 || d > 4) {
    throw 'parameter value out of range';
  }

  // pack the numbers
  return (
    (2 ** s0 * (a - 1)) |
    (2 ** s1 * (b - 1)) |
    (2 ** s2 * (c - 1)) |
    (2 ** s3 * (d - 1))
  );
}

export function unpack(n: number): number[] {
  // check parameter type
  if (typeof n !== 'number') {
    throw 'integer parameter expected';
  }

  // unpack the number
  const a = (n >>> s0) & (2 ** b0 - 1);
  const b = (n >>> s1) & (2 ** b1 - 1);
  const c = (n >>> s2) & (2 ** b2 - 1);
  const d = (n >>> s3) & (2 ** b3 - 1);
  return [a + 1, b + 1, c + 1, d + 1];
}
