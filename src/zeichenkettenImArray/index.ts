type StringsInput = (string | StringsInput)[];

// def strings(array):
// items = set()
//
// def toArray(array):
// for item in array:
// if isinstance(item, str):
// items.add(item)
// else:
// toArray(item)
//
// toArray(array)
//
// return "/".join(sorted(items));

function strings(array: StringsInput) {
  const items: string[] = [];
  const toArray = (array: StringsInput) => {
    array.forEach((item) => {
      if (typeof item === 'string') {
        if (!items.find((resultItem) => resultItem === item)) {
          items.push(item);
        }
      } else {
        toArray(item);
      }
    });
    return items;
  };
  return toArray(array).sort().join('/');
}

console.log(
  'strings',
  strings(['foo', [['bar', 'arb', ['sd', ['2', ['1', ['0']]]]], 'foo', []]])
);
