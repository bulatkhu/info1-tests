import { pack, unpack } from './index';

describe('should pass all tests for unpack and pack functions', () => {
  it('should work for pack(1, 2, 3, 4) and return [1, 2, 3, 4]', () => {
    const result = unpack(pack(1, 2, 3, 4));
    expect(result).toStrictEqual([1, 2, 3, 4]);
  });

  it('should work for pack(12345, 67, 8, 3) and return [12345, 67, 8, 3]', () => {
    const unpacked = unpack(pack(12345, 67, 8, 3));
    expect(unpacked).toStrictEqual([12345, 67, 8, 3]);
  });

  it('should work for pack(60000, 500, 16, 4) and return [60000, 500, 16, 4]', () => {
    const unpacked = unpack(pack(60000, 500, 16, 4));
    expect(unpacked).toStrictEqual([60000, 500, 16, 4]);
  });
});
