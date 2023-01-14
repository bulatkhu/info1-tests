function findLargestNumber(nums: number[]): number {
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  return largest;
} // O(n)

function reverseString(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
} // O(n)

function findNthFibonacci(n: number): number {
  if (n <= 2) {
    return 1;
  }
  let fib1 = 1;
  let fib2 = 1;
  let fibN = 0;
  for (let i = 3; i <= n; i++) {
    fibN = fib1 + fib2;
    fib1 = fib2;
    fib2 = fibN;
  }
  return fibN;
} // O(n)

function findFactorial(n: number): number {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
} // O(n)

function findPrimeNumbers(nums: number[]): number[] {
  let primes: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let isPrime = true;
    if (nums[i] < 2) {
      isPrime = false;
    }
    for (let j = 2; j <= Math.sqrt(nums[i]); j++) {
      if (nums[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(nums[i]);
    }
  }
  return primes;
} // O(n^2)

// 1) O(n)
// 2) O(n)
// 3) O(n)
// 4) O(n^2)
// 5) O(n)
//
// Your answers are correct, but only for some of them.
// 1) O(n) is correct because the function needs to iterate through the string once, so the time it takes to complete will grow linearly with the size of the input string.
// 2) O(n) is correct because the function needs to iterate through the array once, so the time it takes to complete will grow linearly with the size of the input array.
// 3) O(n) is correct because the function needs to iterate n number of times to calculate the nth element of the triangular sequence.
// 4) O(n^2) is correct because the function needs to iterate through the array of strings and for each string it needs to check with all other strings to check if they are anagrams or not, so the time it takes to complete will grow at a rate of n * n with the input size.
// 5) O(n) is correct if the function uses linear search algorithm. But if the function is using binary search algorithm, the time complexity will be O(log(n)) which is faster than linear search.
