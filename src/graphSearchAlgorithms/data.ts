// DATA
import { PointMap } from './dfs2';

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport: string) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin: string, destination: string) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(route[0], route[1]));

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

const points2 = {
  A: ['B'],
  B: ['A', 'C', 'D'],
  D: ['B', 'E'],
  C: ['B'],
  E: ['D', 'F'],
  F: ['E'],
} as PointMap;

const points3 = {
  0: ['1', '5', '6'],
  1: ['3', '4', '5'],
  2: [],
  3: [],
  4: ['2', '6'],
  5: [],
  6: ['0'],
};

export { adjacencyList, points2, points, points3 };
