import plain from './plain.js';
import stylish from './stylish.js';

const getFormatName = (tree, formatName) => {
  switch (formatName) {
    case 'json':
      return JSON.stringify(tree);
    case 'stylish':
      return stylish(tree);
    case 'plain':
      return plain(tree);
    default:
      return stylish(tree);
  }
};

export default getFormatName;
