<h1 style="text-align: center;">2-ой учебный проект на Хекслет: 'Вычислитель отличий'</h1>

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например <a href="http://www.jsondiff.com/">http://www.jsondiff.com/</a>. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

### Сравнение плоских файлов (.json) с абсолютным и относительным путем к файлу
[![asciicast](https://asciinema.org/a/NWDu93PxttIefwCq4DqJlrEjk.svg)](https://asciinema.org/a/NWDu93PxttIefwCq4DqJlrEjk)

### Сравнение плоских файлов (.yaml и .yml) с абсолютным и относительным путем к файлу
[![asciicast](https://asciinema.org/a/v9sC6VRbDHKMliefZSquonMdG.svg)](https://asciinema.org/a/v9sC6VRbDHKMliefZSquonMdG)

### Рекурсивное сравнение файлов (.json и .yml) с абсолютным и относительным путем к файлу
[![asciicast](https://asciinema.org/a/L0g0b7Cpf7x9LQE1jYLxc9mku.svg)](https://asciinema.org/a/L0g0b7Cpf7x9LQE1jYLxc9mku)

## Установка

### Менеджер пакетов

Использование npm:

```bash
$ npm install @hexlet/code
```

Запуск:

```bash
$ gendiff -h
$ gendiff filepath1.json filepath2.json
$ gendiff filepath1.json filepath2.json -f stylish
$ gendiff filepath1.json filepath2.json -f json
$ gendiff filepath1.json filepath2.json -f plain
```

### Hexlet tests and linter status:

[![Actions Status](https://github.com/zebpaa/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zebpaa/frontend-project-46/actions) 
[![Maintainability](https://api.codeclimate.com/v1/badges/f63bfcf40c099af9031e/maintainability)](https://codeclimate.com/github/zebpaa/frontend-project-46/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/f63bfcf40c099af9031e/test_coverage)](https://codeclimate.com/github/zebpaa/frontend-project-46/test_coverage) 
[![zebpaa-check](https://github.com/zebpaa/frontend-project-46/actions/workflows/zebpaa-check.yml/badge.svg)](https://github.com/zebpaa/frontend-project-46/actions/workflows/zebpaa-check.yml)