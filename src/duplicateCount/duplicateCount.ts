export function duplicateCount(text: string): number {
  const duplicates = text
    .toLowerCase()
    .split('')
    .reduce<Record<string, number>>((sum, letter) => {
      sum[letter] = typeof sum[letter] === 'number' ? sum[letter] + 1 : 0;
      return sum;
    }, {});

  const textLower = text.toLowerCase();
  console.log('distinctValues', [...new Set(textLower)], 'values', textLower);

  return Object.values(duplicates).reduce(
    (sum, amount) => (!amount ? sum : sum + 1),
    0
  );
}
