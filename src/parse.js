import yml from 'js-yaml';

const parser = {
  json: JSON.parse,
  yaml: yml.load,
  yml: yml.load,
};

export default (data, format) => parser[format](data);
