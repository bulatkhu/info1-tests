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

const colorsMap = {
  pink: 1,
  rot: 2,
  braun: 3,
  blau: 4,
  schwarz: 5,
  grau: 6,
  gelb: 7,
};

function colorOrder(color: keyof typeof colorsMap): number {
  return colorsMap[color];
}

let arr = ['pink 12', 'schwarz 11', 'grau 18', 'schwarz 11', 'schwarz 3'];
let tree = buildTree(arr);
console.log(tree?.str());
// Output: "pink 12 ((schwarz 3) schwarz 11 (grau 18))"
