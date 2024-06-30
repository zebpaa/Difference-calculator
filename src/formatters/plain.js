const formateToPlain = (tree) => {
  const formatedTree = tree.flatMap((obj) => {
    if (obj.type === 'nested') formateToPlain(obj.children);
    if (obj.type === 'added') return `Property '${obj.key}' was ${obj.type} with value: ${obj.value}`;
    if (obj.type === 'deleted') return `Property '${obj.key}' was removed`;
    if (obj.type === 'changed') return `Property '${obj.key}' was updated. From ${obj.value1} to ${obj.value2}`;
    return [];
  });
  return formatedTree.map((obj) => console.log(obj));
};

export default formateToPlain;
