import { CustomNode, listPaths } from './index';

describe('should pass all tests', () => {
  it('all paths to blue and show all paths', () => {
    expect(
      listPaths([
        new CustomNode('red', [1, 2, 4]),
        new CustomNode('white', [2]),
        new CustomNode('red', [3, 4]),
        new CustomNode('yellow', [4]),
        new CustomNode('blue', []),
      ])
    ).toStrictEqual([
      [0],
      [0, 1],
      [0, 1, 2],
      [0, 1, 2, 3],
      [0, 1, 2, 3, 4],
      [0, 1, 2, 4],
      [0, 2],
      [0, 2, 3],
      [0, 2, 3, 4],
      [0, 2, 4],
      [0, 4],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 4],
      [2],
      [2, 3],
      [2, 3, 4],
      [2, 4],
      [3],
      [3, 4],
      [4],
    ]);
  });

  it('exclude all paths to blue and show all paths', () => {
    expect(
      listPaths(
        [
          new CustomNode('red', [1, 2, 4]),
          new CustomNode('white', [2]),
          new CustomNode('red', [3, 4]),
          new CustomNode('yellow', [4]),
          new CustomNode('blue', []),
        ],
        'blue'
      )
    ).toStrictEqual([
      [0],
      [0, 1],
      [0, 1, 2],
      [0, 1, 2, 3],
      [0, 2],
      [0, 2, 3],
      [1],
      [1, 2],
      [1, 2, 3],
      [2],
      [2, 3],
      [3],
    ]);
  });

  it('exclude all paths to blue and show all paths #1', () => {
    expect(
      listPaths(
        [
          new CustomNode('blue', [1, 2, 4]),
          new CustomNode('white', [2]),
          new CustomNode('red', [3, 4]),
          new CustomNode('yellow', [4]),
          new CustomNode('red', []),
        ],
        'red'
      )
    ).toStrictEqual([[0],[0,1],[1],[2]]);
  });

  it('exclude all paths to blue and show all paths #2', () => {
    expect(
      listPaths([
        new CustomNode('red', [1, 2, 4]),
        new CustomNode('white', [2]),
        new CustomNode('blue', [3, 4]),
        new CustomNode('yellow', [4]),
        new CustomNode('blue', []),
      ],
        'blue'
      )
    ).toStrictEqual([[0],[0,1],[2],[2,3]]);
  });
});
