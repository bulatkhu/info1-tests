namespace binarySearchTree {
  type BinarySearchTreeType = BinarySearchTree | null;

  class BinarySearchTree {
    key: number;
    value: string;
    left: BinarySearchTreeType;
    right: BinarySearchTreeType;

    constructor(
      key: BinarySearchTree['key'],
      value: BinarySearchTree['value'],
      left: BinarySearchTree['left'] = null,
      right: BinarySearchTree['right'] = null
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

  const result = tree.search(4);

  console.log('result', result);
}
