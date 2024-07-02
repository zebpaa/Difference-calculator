import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 4) => {
  const iter = (currentValue, depth) => {
    // альтернативный вариант: (typeof currentValue !== 'object' || currentValue === null)
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }
    const shifting = spacesCount - 2;
    const indentSize = depth * spacesCount;
    const bracketIndent = replacer.repeat(depth * spacesCount - spacesCount);
    const lines = Object.entries(currentValue).map(([key, val]) => `${(key.includes(' ')) ? replacer.repeat(indentSize - shifting) : replacer.repeat(indentSize)}${key}: ${iter(val, depth + 1)}`);

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, 1);
};

const formateToStylish = (tree) => {
  const result = {};
  // eslint-disable-next-line array-callback-return
  tree.map((obj) => {
    if (obj.type === 'nested') result[`${obj.key}`] = formateToStylish(obj.children);
    if (obj.type === 'added') result[`+ ${obj.key}`] = obj.value;
    if (obj.type === 'deleted') result[`- ${obj.key}`] = obj.value;
    if (obj.type === 'changed') {
      result[`- ${obj.key}`] = obj.value1;
      result[`+ ${obj.key}`] = obj.value2;
    }
    if (obj.type === 'unchanged') result[`  ${obj.key}`] = obj.value;
  });
  console.log(result);
  return stringify(result, ' ', 4);
};

export default formateToStylish;
