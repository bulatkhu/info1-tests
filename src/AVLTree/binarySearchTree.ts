namespace binarySearchTree {
  type BinarySearchTreeType = BinarySearchTree | null;
  type BinaryTreeKey = BinarySearchTree['key'];
  type BinaryTreeValue = BinarySearchTree['value'];

  class BinarySearchTree {
    key: number;
    value: string;
    left: BinarySearchTreeType;
    right: BinarySearchTreeType;

    constructor(
      key: BinaryTreeKey,
      value: BinaryTreeValue,
      left: BinarySearchTreeType = null,
      right: BinarySearchTreeType = null
    ) {
      this.key = key;
      this.value = value;
      this.left = left;
      this.right = right;
    }

    search(k: number): BinarySearchTreeType {
      if (this.key === k) {
        return this;
      }

      const child = this.key < k ? this.right : this.left;

      if (child) {
        return child.search(k);
      }
      return null;
    }

    insert(key: BinaryTreeKey, value: BinaryTreeValue) {
      if (this.key === key) {
        this.value = value;
        return;
      }

      if (key < this.key) {
        if (this.left) {
          this.left.insert(key, value);
        } else {
          this.left = new BinarySearchTree(key, value);
        }
        return;
      }

      if (this.right) {
        this.right.insert(key, value);
      } else {
        this.right = new BinarySearchTree(key, value);
      }
    }
  }

  const tree = new BinarySearchTree(
    5,
    'apple',
    new BinarySearchTree(
      3,
      'banana',
      new BinarySearchTree(2, 'cherry'),
      new BinarySearchTree(4, 'date')
    ),
    new BinarySearchTree(
      8,
      'fig',
      new BinarySearchTree(6, 'grape', null, new BinarySearchTree(7, 'kiwi')),
      new BinarySearchTree(
        10,
        'lemon',
        new BinarySearchTree(9, 'mango'),
        new BinarySearchTree(11, 'orange')
      )
    )
  );

  //         2 (cherry)
  //     3 (banana)
  //         4 (date)
  // 5 (apple)
  //         6 (grape)
  //             7 (kiwi)
  //     8 (fig)
  //             9 (mango)
  //         10 (lemon)
  //             11 (orange)

  function printTree(root: BinarySearchTree | null, level: number = 0) {
    if (root === null) {
      return;
    }
    printTree(root.left, level + 1);
    console.log(' '.repeat(level * 4) + root.key + ' (' + root.value + ')');
    printTree(root.right, level + 1);
  }

  printTree(tree);
  console.log('');

  tree.insert(1, 'apple 2');
  tree.insert(0, 'apple 3');
  tree.insert(-1, 'apple 4');
  tree.insert(5, 'apple 4');
  tree.insert(12, 'apple 4');
  tree.insert(34, 'apple 4');

  printTree(tree);

  // console.log('result', result);
}
