import { PointMap, PointsT } from './dfs2';
import { points, points2 } from './data';

const bfs2 = (from: PointsT, points: PointMap) => {
  const queue = [from];
  const visited = new Set<string>();

  while (queue.length !== 0) {
    const current = queue.pop()!;

    if (!visited.has(current)) {
      console.log(current);
      visited.add(current);
    }

    for (const currentElement of points[current]) {
      if (!visited.has(currentElement)) {
        queue.unshift(currentElement);
      }
    }

    // console.log('queue', queue);
    // console.log('From', from);
  }
};

bfs2('A', points);
console.log('--------------------');
bfs2('A', points2);
