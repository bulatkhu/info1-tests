import { points, points2 } from './data';

export type PointsT = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export type PointMap = Record<PointsT, PointsT[]>;

const dfs2 = (
  from: PointsT,
  map: PointMap,
  conditioner?: (to: PointsT) => boolean,
  visited = new Set<string>()
) => {
  const destinations = map[from];

  // console.log('destinations', destinations);

  console.log(from);
  visited.add(from);

  for (const destination of destinations) {
    if (conditioner?.(destination)) {
      console.log(`${destination} Route from ${from} to ${destination} found`);
      return;
    }

    if (!visited.has(destination)) {
      dfs2(destination, map, conditioner, visited);
    }
  }
};

dfs2('C', points);

console.log('--------------------');

dfs2('A', points2, (destination) => destination === 'H');
// A
// B
// C
// D
// E
// H Route from E to H found
// H Route from D to H found
// G
// F
// H Route from F to H found
