const colorsMap = {
  pink: 1,
  rot: 2,
  braun: 3,
  blau: 4,
  schwarz: 5,
  grau: 6,
  gelb: 7,
};

type Maybe<T> = T | null;

type Colors = keyof typeof colorsMap;

type Key = `${Colors} ${number}`;

const leftKey = 'm_left' as const;
const rightKey = 'm_right' as const;
const valueKey = 'm_key' as const;

class MyNode {
  [valueKey]: Key;
  [leftKey]: Maybe<MyNode> = null;
  [rightKey]: Maybe<MyNode> = null;

  constructor(key: Key) {
    this[valueKey] = key;
  }

  str(): string {
    let s = '';
    if (this[leftKey] != null) {
      s += `(${this[leftKey].str()}) `;
    }
    s += this[valueKey];
    if (this[rightKey] != null) {
      s += ` (${this[rightKey].str()})`;
    }
    return s;
  }
}

function parseKey(key: Key) {
  const [color, value] = key.split(' ');
  return [color as Colors, +value] as const;
}

function compareKeys(key1: Key, key2: Key) {
  const [color1, number1] = parseKey(key1);
  const [color2, number2] = parseKey(key2);

  if (color1 === color2) {
    if (number1 === number2) {
      return { field: rightKey, isEqual: true };
    }

    return number1 < number2
      ? { field: leftKey, isEqual: false }
      : { field: rightKey, isEqual: false };
  }

  if (colorsMap[color1] < colorsMap[color2]) {
    return { field: leftKey, isEqual: false };
  }

  return { field: rightKey, isEqual: false };
}

function treeFind(node: MyNode, key: Key) {
  const [color, number] = parseKey(key);

  const middleKey = node[valueKey];
}

function buildTree(arr: Key[]) {
  let tree = new MyNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const [color, number] = parseKey(arr[i]);
    let current: Maybe<MyNode> = tree;
    let parent: Maybe<MyNode> = null!;
    while (current) {
      parent = current;
      const { field } = compareKeys(arr[i], current[valueKey]);
      current = current[field];
    }
    const { field } = compareKeys(arr[i], parent[valueKey]);
    parent[field] = new MyNode(`${color} ${number}`);
  }
  return tree;
}

const arr: Key[] = [
  'pink 12',
  'schwarz 11',
  'grau 18',
  'schwarz 11',
  'schwarz 3',
];
const tree = buildTree(arr);
console.log(tree.str());
// Output: "pink 12 ((schwarz 3) schwarz 11 (grau 18))"
