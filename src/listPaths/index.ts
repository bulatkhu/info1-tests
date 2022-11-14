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
