type EdgesType = number[];
// Bitte verändern Sie diese Klasse nicht!
export class CustomNode {
  color: string = 'red';
  edges: EdgesType = [];

  constructor(color: string, edges: EdgesType) {
    this.color = color;
    this.edges = edges;
  }
}

export function listPaths(
  preliminaryGraph: CustomNode[],
  undesirableColor?: string
) {
  const undesiredColorIndices = preliminaryGraph.reduce<number[]>(
    (indices, node, index) => {
      if (
        node.color === undesirableColor &&
        indices.find((idx) => idx === index) === undefined
      ) {
        indices.push(index);
      }
      return indices;
    },
    []
  );

  const graph = preliminaryGraph.reduce<CustomNode[]>((graph, currentNode) => {
    if (currentNode.color !== undesirableColor) {
      const edges = currentNode.edges.filter(
        (edge) =>
          undesiredColorIndices.find((index) => index === edge) === undefined
      );
      graph.push(new CustomNode(currentNode.color, edges));
    }
    return graph;
  }, []);
  const values: EdgesType[] = [];
  function valuesExtractor(edges: EdgesType, baseEdge: EdgesType) {
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      const mergedEdge = baseEdge.concat(edge);
      values.push(mergedEdge);
      valuesExtractor(graph[edge].edges, mergedEdge);
    }
  }
  for (let index = 0; index < graph.length; index++) {
    const { edges } = graph[index];
    values.push([index]);
    valuesExtractor(edges, [index]);
  }
  return values;
}


const array = [
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
];

function isArrayInIndices(values: number[][], indices: number[]) {
  const newValues: number[][] = [];
  const indicesAsKeys: Record<string, boolean> = {};
  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    indicesAsKeys[index] = true;
  }
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    let shouldAdd = true;

    for (let j = 0; j < value.length; j++) {
      const innerValue = value[j];

      if (indicesAsKeys[innerValue] && shouldAdd) {
        shouldAdd = false;
      }
    }

    if (shouldAdd) {
      newValues.push(value)
    }
  }

  return newValues;
}

console.log(isArrayInIndices(array, [2]));
