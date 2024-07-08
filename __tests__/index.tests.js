import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let pathToFile1;
let pathToFile2;
let pathToFile3;
let pathToFile4;
let resultPlainFormat;
let resultStylishFormat;
beforeAll(() => {
  pathToFile1 = getFixturePath('file1.json');
  pathToFile2 = getFixturePath('file2.json');
  pathToFile3 = getFixturePath('file1.yml');
  pathToFile4 = getFixturePath('file2.yml');
  resultPlainFormat = readFile('expectedPlain.txt');
  resultStylishFormat = readFile('expectedStylish.txt');
});

test('test genDiff to work with stylish format', () => {
  expect(genDiff(pathToFile1, pathToFile2)).toBe(resultStylishFormat);

  expect(genDiff(pathToFile3, pathToFile4)).toBe(resultStylishFormat);
});

test('test genDiff to work with plain format', () => {
  expect(genDiff(pathToFile1, pathToFile2, 'plain')).toBe(resultPlainFormat);

  expect(genDiff(pathToFile3, pathToFile4, 'plain')).toBe(resultPlainFormat);
});
