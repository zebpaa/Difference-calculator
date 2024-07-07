import _ from 'lodash';

const addQuotes = (value) => (_.isString(value) ? `'${value}'` : value);

const getPathOfElement = (acc) => {
  if (acc !== '') {
    const newAcc = `${acc}`;
    return newAcc;
  }
  return '';
};

const isObject = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return `${addQuotes(value)}`;
};

const formateToPlain = (tree) => {
  const iter = (node, acc) => node.flatMap((obj) => {
    if (obj.type === 'nested') {
      const newAcc = `${acc}${obj.key}.`;
      return `${iter(obj.children, newAcc)}`;
    }
    if (obj.type === 'added') return `Property '${getPathOfElement(acc)}${obj.key}' was added with value: ${isObject(obj.value)}`;
    if (obj.type === 'deleted') return `Property '${getPathOfElement(acc)}${obj.key}' was removed`;
    if (obj.type === 'changed') return `Property '${getPathOfElement(acc)}${obj.key}' was updated. From ${isObject(obj.value1)} to ${isObject(obj.value2)}`;
    return [];
  }).join('\n');
  return iter(tree, '');
};

export default formateToPlain;
