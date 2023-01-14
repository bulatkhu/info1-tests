// 1. Write a function in TypeScript that takes in an array of numbers and returns the sum of all elements in the array.
//   Analyze the time complexity of the function and express it in O notation.
const function1 = (array: number[]) => {
  return array.reduce((sum, item) => sum + item, 0);
}; // result: O(n)

// 2. Write a function in TypeScript that takes in an array of strings and returns a new array with all strings in reverse order.
//   Analyze the time complexity of the function and express it in O notation.
const function2 = (strings: string[]) => {
  const result = [];
  for (let index = 0; index < strings.length; index++) {
    const valueReversed = strings[strings.length - index - 1];
    result.push(valueReversed);
  }
  return result;
}; // result: O(n)

// 3. Write a function in TypeScript that takes in a number 'n' and returns the 'nth' Fibonacci number.
//   Analyze the time complexity of the function and express it in O notation.

const function3 = (n: number) => {
  let currentValue = 0;
  let previousValue = 0;
  for (let i = 0; i <= n; i++) {
    if (i == 0) {
      currentValue = 1;
    }
    if (i == 1) {
      previousValue = 1;
      currentValue = 1;
    }
    const newCurrentValue = currentValue + previousValue;
    previousValue = currentValue;
    currentValue = newCurrentValue;
  }
  return previousValue;
}; // result time complexity is O(n)

//4. Write a function in TypeScript that takes in a number 'n' and returns the factorial of that number.
//   Analyze the time complexity of the function and express it in O notation.

function function4(n: number) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
} // result T is O(n)

function4(5);

// 5. Write a function in TypeScript that takes in an array of numbers and returns a new array with only the prime numbers from the original array.
//    Analyze the time complexity of the function and express it in O notation.

function function5(array: number[]) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    let isPrime = true;

    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      result.push(value);
    }
  }
  return result;
} // result T is O(n^2)

// Answers:

// The time complexity of the function that takes in an array of numbers and returns the sum of all elements in the array is O(n) because the function needs to iterate through the array once, so the time it takes to complete will grow linearly with the size of the input array.
//
// The time complexity of the function that takes in an array of strings and returns a new array with all strings in reverse order is O(n) because the function needs to iterate through the array once, so the time it takes to complete will grow linearly with the size of the input array.
//
// The time complexity of the function that takes in a number 'n' and returns the 'nth' Fibonacci number is O(n) because the function needs to iterate n number of times to calculate nth fibonacci number.
//
// The time complexity of the function that takes in a number 'n' and returns the factorial of that number is O(n) because the function needs to iterate n number of times to calculate the factorial of n.
//
// The time complexity of the function that takes in an array of numbers and returns a new array with only the prime numbers from the original array is O(n^2) because the function needs to iterate through the array once and for each element, it needs to check if it's prime or not, which takes O(n) time, making the overall time complexity O(n^2).
