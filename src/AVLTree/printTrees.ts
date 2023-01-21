type TreeChild = Tree | null;

class Tree<T = any> {
  data: T;
  left: TreeChild;
  right: TreeChild;

  constructor(data: T, left: TreeChild = null, right: TreeChild = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function printSorted(tree: Tree) {
  if (tree.left) {
    printSorted(tree.left);
  }

  console.log(tree.data);

  if (tree.right) {
    printSorted(tree.right);
  }
}

const myTree = new Tree(
  'mole',
  new Tree('ant', null, new Tree('deer')),
  new Tree('worm', new Tree('rabbit'), new Tree('zebra'))
);
printSorted(myTree);
