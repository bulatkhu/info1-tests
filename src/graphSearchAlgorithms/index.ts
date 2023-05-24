// DFS Depth First Search
import { adjacencyList } from './data';

function dfs<T>(from: T, to: T, visited = new Set<T>()) {
  const destinations = adjacencyList.get(from);
  visited.add(from);
  console.log(from);

  for (const destination of destinations) {
    if (destination === to) {
      console.log(`${to} Route from ${from} to ${to} found`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, to, visited);
    }
  }

  // console.log('destinations', destinations);
}

dfs('PHX', 'BKK');
