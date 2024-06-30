import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import buildTree from './treeBuilder.js';
import format from './formatters/json.js';

const fullFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath));

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = fullFilePath(filepath1);
  const fullFilePath2 = fullFilePath(filepath2);
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  // console.log('data1: ', data1);
  // console.log('data2: ', data2);
  const tree = buildTree(data1, data2);
  // console.log('Tree:', tree);
  const formatedTree = format(tree);
  // console.log('##########################');
  // console.log('Форматированное дерево:', formatedTree);
  return formatedTree;
};

export default gendiff;
