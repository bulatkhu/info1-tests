// Bitte verändern Sie diese Klasse nicht!
class CustomNode {
  color: string = 'red';
  edges: number[] = [];

  constructor(color: string, edges: number[]) {
    this.color = color;
    this.edges = edges;
  }
}

const graph = [
  new CustomNode('red', [1, 2, 4]),
  new CustomNode('white', [2]),
  new CustomNode('red', [3, 4]),
  new CustomNode('yellow', [4]),
  new CustomNode('blue', []),
];

console.log('graph', graph);
