import gendiff from '../index.js';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import path from 'path';

// test('gendiff', () => {
//   //   const __filename = fileURLToPath(import.meta.url);
//   //   const __dirname = dirname(__filename);

// const result = {
//   '- follow': false,
//   '  host': 'hexlet.io',
//   '- proxy': '123.234.53.22',
//   '- timeout': 50,
//   '+ timeout': 20,
//   '+ verbose': true,
// };

//   //   const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//   expect(gendiff(filepath1, filepath2)).toBe(result);
// });

test('gendiff', () => {
  const filepath1 = '/home/zebpaa/frontend-project-46/__fixtures__/file1.json';
  const filepath2 = '__fixtures__/file2.json';
  const result = {
    '- follow': false,
    '  host': 'hexlet.io',
    '- proxy': '123.234.53.22',
    '- timeout': 50,
    '+ timeout': 20,
    '+ verbose': true,
  };
  expect(gendiff(filepath1, filepath2)).toEqual(result);
});
