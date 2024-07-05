import _ from 'lodash';

const indent = (depth) => {
  const str = ' ';
  const marginsNumber = 4;
  return str.repeat(depth * marginsNumber - 2);
};

const indentBracket = (depth) => {
  const str = ' ';
  const marginsNumber = 4;
  return str.repeat(depth * marginsNumber - marginsNumber);
};

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const entries = Object.entries(value);
  const lines = entries.map(([key, val]) => `  ${indent(depth + 1)}${key}: ${stringify(val, depth + 1)}`);
  return (['{', ...lines, `  ${indent(depth)}}`].join('\n'));
};

const formateToStylish = (tree) => {
  const iter = (node, depth) => {
    // eslint-disable-next-line array-callback-return, consistent-return
    const result = node.map((child) => {
      if (child.type === 'nested') {
        return `${indent(depth)}  ${child.key}: ${iter(child.children, depth + 1)}`;
      }
      if (child.type === 'deleted') {
        return `${indent(depth)}- ${child.key}: ${stringify(child.value, depth)}`;
      }
      if (child.type === 'added') {
        return `${indent(depth)}+ ${child.key}: ${stringify(child.value, depth)}`;
      }
      if (child.type === 'changed') {
        return `${indent(depth)}- ${child.key}: ${stringify(child.value1, depth)}\n${indent(depth)}+ ${child.key}: ${stringify(child.value2, depth)}`;
      }
      if (child.type === 'unchanged') {
        return `${indent(depth)}  ${child.key}: ${stringify(child.value, depth)}`;
      }
    });
    return ['{', ...result, `${indentBracket(depth)}}`].join('\n');
  };

  return iter(tree, 1);
};

export default formateToStylish;
