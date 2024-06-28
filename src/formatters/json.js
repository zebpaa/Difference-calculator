const formateToJson = (tree) => {
  const result = {};
  // eslint-disable-next-line array-callback-return
  tree.map((obj) => {
    if (obj.type === 'nested') formateToJson(obj.children);
    else if (obj.type === 'added') result[`+ ${obj.key}`] = obj.value;
    else if (obj.type === 'deleted') result[`- ${obj.key}`] = obj.value;
    else if (obj.type === 'changed') {
      result[`- ${obj.key}`] = obj.value1;
      result[`+ ${obj.key}`] = obj.value2;
    } else result[`  ${obj.key}`] = obj.value;
  });
  return JSON.stringify(result, null, 2);
};

export default formateToJson;
