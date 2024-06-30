import _ from 'lodash';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const iter = (currentValue, depth) => {
    // альтернативный вариант: (typeof currentValue !== 'object' || currentValue === null)
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object.entries(currentValue).map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);

    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };

  return iter(value, 1);
};

const formateToStylish = (tree) => {
  const result = {};
  // eslint-disable-next-line array-callback-return
  tree.map((obj) => {
    if (obj.type === 'nested') result[`${obj.key}`] = formateToStylish(obj.children);
    else if (obj.type === 'added') result[`+ ${obj.key}`] = obj.value;
    else if (obj.type === 'deleted') result[`- ${obj.key}`] = obj.value;
    else if (obj.type === 'changed') {
      result[`- ${obj.key}`] = obj.value1;
      result[`+ ${obj.key}`] = obj.value2;
    } else result[`  ${obj.key}`] = obj.value;
  });
  // console.log(result);
  return stringify(result, ' ', 1);
};

export default formateToStylish;
