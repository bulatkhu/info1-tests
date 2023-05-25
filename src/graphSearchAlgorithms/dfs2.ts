type PointsT = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

type PointMap = Record<PointsT, PointsT[]>;

const points = {
  A: ['B', 'C', 'D', 'E'],
  B: ['A', 'C', 'G'],
  C: ['A', 'B', 'D'],
  D: ['A', 'C', 'E', 'H'],
  E: ['A', 'D', 'H', 'F'],
  F: ['E', 'G', 'H'],
  G: ['B', 'F'],
  H: ['D', 'F'],
} satisfies PointMap;

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

const points2 = {
  D: ['B', 'E'],
  B: ['A', 'C', 'D'],
  A: ['B'],
  C: ['B'],
  E: ['D', 'F'],
  F: ['E'],
} as PointMap;

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
