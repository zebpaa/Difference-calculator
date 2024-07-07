import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each(['json', 'yml', 'yaml'])('gendiff_test_format', (format) => {
  const filepath1 = getFixturePath(`file1.${format}`);
  const filepath2 = getFixturePath(`file2.${format}`);
  expect(gendiff(filepath1, filepath2)).toBe(readFile('expectedStylish.txt'));
  expect(gendiff(filepath1, filepath2, 'stylish')).toBe(readFile('expectedStylish.txt'));
  expect(gendiff(filepath1, filepath2, 'plain')).toBe(readFile('expectedPlain.txt'));
  expect(gendiff(filepath1, filepath2, 'json')).toBe(readFile('expectedJson.json'));
});
