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

class Node {
  [valueKey]: Key;
  [leftKey]: Maybe<Node> = null;
  [rightKey]: Maybe<Node> = null;

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

export function printTree(root: Maybe<Node>, level: number = 0) {
  if (root === null) {
    return;
  }
  const [color, number] = parseKey(root.m_key);

  printTree(root.m_left, level + 1);
  console.log(' '.repeat(level * 4) + color + ' (' + number + ')');
  printTree(root.m_right, level + 1);
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

function treeFind(node: Node, key: Key): Maybe<Node> {
  const { field: originalField, isEqual } = compareKeys(node[valueKey], key);
  if (isEqual) {
    return node;
  }
  const field = originalField === rightKey ? leftKey : rightKey;
  const current = node[field];
  if (current) {
    if (current[valueKey] === key) {
      return current;
    }
    return treeFind(current, key);
  }
  return null;
}

function buildTree(arr: Key[]) {
  const tree = new Node(arr[0]);
  arr.forEach((item) => {
    const [color, number] = parseKey(item);
    let current: Maybe<Node> = tree;

    if (treeFind(current, item)) {
      return;
    }

    let parent: Maybe<Node> = null!;
    while (current) {
      parent = current;
      const { field } = compareKeys(item, current[valueKey]);
      current = current[field];
    }
    const { field } = compareKeys(item, parent[valueKey]);
    parent[field] = new Node(`${color} ${number}`);
  });
  return tree;
}

const arr: Key[] = [
  'pink 12',
  'schwarz 11',
  'grau 18',
  'schwarz 11',
  'schwarz 3',
  'grau 19',
];
const tree = buildTree(arr);
printTree(tree);

const value = treeFind(tree, 'pink 12');

console.log('value', value?.m_key);

// Output: "pink 12 ((schwarz 3) schwarz 11 (grau 18))"
