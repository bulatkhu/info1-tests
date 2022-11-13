import { duplicateCount } from './duplicateCount';

describe('should pass all tests', () => {
  it('should return 0', function () {
    expect(duplicateCount('')).toBe(0);
    expect(duplicateCount('abcde')).toBe(0);
    expect(duplicateCount('aabbcde')).toBe(2);
  });

  it('should ignore case', () => {
    expect(duplicateCount('aabBcde')).toBe(2);
    expect(duplicateCount('Indivisibility')).toBe(1);
  });

  it('characters may not be adjacent', function () {
    expect(duplicateCount('Indivisibilities')).toBe(2);
  });
});
