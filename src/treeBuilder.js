import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const result = {};

  for (const key of sortedKeys) {
    if (!Object.hasOwn(data1, key)) {
      result[`+ ${key}`] = data2[key];
    } else if (!Object.hasOwn(data2, key)) {
      result[`- ${key}`] = data1[key];
    } else if (data1[key] !== data2[key]) {
      result[`- ${key}`] = data1[key];
      result[`+ ${key}`] = data2[key];
    } else {
      result[`  ${key}`] = data1[key];
    }
  }

  return JSON.stringify(result);
};

export default buildTree;
