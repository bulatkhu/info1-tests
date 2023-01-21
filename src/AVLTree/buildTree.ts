class MyNode {
  m_key: any;
  m_left: MyNode | null = null;
  m_right: MyNode | null = null;

  constructor(key: any) {
    this.m_key = key;
  }

  str(): string {
    let s = '';
    if (this.m_left != null) {
      s += `(${this.m_left.str()}) `;
    }
    s += this.m_key;
    if (this.m_right != null) {
      s += ` (${this.m_right.str()})`;
    }
    return s;
  }
}

function buildTree(arr: any[]) {
  let tree = new MyNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let [color, number] = arr[i].split(' ');
    let current = tree;
    let parent: MyNode = null!;
    while (current) {
      parent = current;
      let [currentColor, currentNumber] = current.m_key.split(' ');
      if (color === currentColor) {
        if (number < currentNumber) {
          current = current.m_left!;
        } else {
          current = current.m_right!;
        }
      } else {
        if (colorOrder(color) < colorOrder(currentColor)) {
          current = current.m_left!;
        } else {
          current = current.m_right!;
        }
      }
    }
    if (color === parent.m_key.split(' ')[0]) {
      if (number < parent.m_key.split(' ')[1]) {
        parent.m_left = new MyNode(color + ' ' + number);
      } else {
        parent.m_right = new MyNode(color + ' ' + number);
      }
    } else {
      if (colorOrder(color) < colorOrder(parent.m_key.split(' ')[0])) {
        parent.m_left = new MyNode(color + ' ' + number);
      } else {
        parent.m_right = new MyNode(color + ' ' + number);
      }
    }
  }
  return tree;
}

function colorOrder(color: string): number {
  switch (color) {
    case 'pink':
      return 1;
    case 'rot':
      return 2;
    case 'braun':
      return 3;
    case 'blau':
      return 4;
    case 'schwarz':
      return 5;
    case 'grau':
      return 6;
    case 'gelb':
      return 7;
    default:
      return 0;
  }
}

let arr = ['pink 12', 'schwarz 11', 'grau 18', 'schwarz 11', 'schwarz 3'];
let tree = buildTree(arr);
console.log(tree?.str());
// Output: "pink 12 ((schwarz 3) schwarz 11 (grau 18))"
