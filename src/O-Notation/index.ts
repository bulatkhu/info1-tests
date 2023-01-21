import './Exercises';

function ONotation(n: number) {
  const x = 5 + 15 * 20; // O(1)

  for (let x = 0; x < n; x++) {
    console.log(x);
  } // O(n)

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      console.log(x * y);
    }
  } // 0(n^2)
} // result: Max(O(1), O(n), O(n^2)) => O(n^2)

function measurePerformance<T, R>(callback: (value: T) => R, value: T) {
  const start = performance.now();
  callback(value);
  const end = performance.now();
  return end - start;
}

function function1(n: number) {
  return (2 + 1 / n) ** n;
}

function function2(n: number) {
  return n ** 2 + n ** 2 / (n * Math.log(n)) / (Math.sqrt(n) + 1);
}

function function3(n: number) {
  return n ** (n - 1) / (n ** 7 + 10);
}

function function4(n: number) {
  return n ** 2 / n / (Math.sqrt(n) + 3);
}

function function5(n: number) {
  return n + 3 ** (n ** 2 / (n + 5));
}

const results = [
  measurePerformance(function5, 1000000000000000000000000000000000000000),
  measurePerformance(function1, 1000000000000000000000000000000000000000),
  measurePerformance(function3, 1000000000000000000000000000000000000000),
  measurePerformance(function4, 1000000000000000000000000000000000000000),
  measurePerformance(function2, 1000000000000000000000000000000000000000),
];

console.log('results', results);
