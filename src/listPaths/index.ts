type EdgesType = number[];
// Bitte verändern Sie diese Klasse nicht!
class CustomNode {
  color: string = 'red';
  edges: EdgesType = [];

  constructor(color: string, edges: EdgesType) {
    this.color = color;
    this.edges = edges;
  }
}

const firstGraph: CustomNode[] = [
  new CustomNode('red', [1, 2, 4]),
  new CustomNode('white', [2]),
  new CustomNode('red', [3, 4]),
  new CustomNode('yellow', [4]),
  new CustomNode('blue', []),
];

const undesirableColor = 'blue';

function listPaths(preliminaryGraph: CustomNode[]) {
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

const values = listPaths(firstGraph);
console.log('values: ', values, 'values.length: ', values.length);
