// number of bits per range
const b0 = Math.ceil(Math.log2(59999));
const b1 = Math.ceil(Math.log2(499));
const b2 = Math.ceil(Math.log2(15));
const b3 = Math.ceil(Math.log2(3));

console.log('Math.log2(59999)', Math.log2(59999));
console.log('Math.log2(499)', Math.log2(499));
console.log('Math.log2(15)', Math.log2(15));
console.log('Math.log2(3)', Math.log2(3));

console.log('b0', b0);
console.log('b1', b1);
console.log('b2', b2);
console.log('b3', b3);

console.log('2 ^ 6', Math.pow(2, 16));

console.log('Math.log2(8)', Math.log2(8), '2 ^ 3', Math.pow(2, 3));
