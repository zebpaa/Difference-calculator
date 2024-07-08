<h1 style="text-align: center;">2-ой учебный проект на Хекслет: 'Вычислитель отличий'</h1>

## Hexlet tests and linter status:

[![Actions Status](https://github.com/zebpaa/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zebpaa/frontend-project-46/actions) 
[![Maintainability](https://api.codeclimate.com/v1/badges/f63bfcf40c099af9031e/maintainability)](https://codeclimate.com/github/zebpaa/frontend-project-46/maintainability) 
[![Test Coverage](https://api.codeclimate.com/v1/badges/f63bfcf40c099af9031e/test_coverage)](https://codeclimate.com/github/zebpaa/frontend-project-46/test_coverage) 
[![zebpaa-check](https://github.com/zebpaa/frontend-project-46/actions/workflows/zebpaa-check.yml/badge.svg)](https://github.com/zebpaa/frontend-project-46/actions/workflows/zebpaa-check.yml)

<a href="https://ru.hexlet.io/programs/frontend/projects/46">Ссылка на проект</a>

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

### Плоский формат (.json и .yml) с абсолютным и относительным путем к файлу
[![asciicast](https://asciinema.org/a/JM8NfiF4HspIo6Kts1vxHQj8O.svg)](https://asciinema.org/a/JM8NfiF4HspIo6Kts1vxHQj8O)

### Вывод в формате json (.json и .yaml) с относительным и абсолютным путем к файлу
[![asciicast](https://asciinema.org/a/fMDlIr6BjQwJwyoA1bf1CTLi7.svg)](https://asciinema.org/a/fMDlIr6BjQwJwyoA1bf1CTLi7)

## Установка

### Менеджер пакетов

Использование npm:

```bash
$ npm install @hexlet/code
```

Запуск: 

```bash
$ gendiff -h #help info
$ gendiff filepath1 filepath2 #default stylish format
$ gendiff filepath1 filepath2 -f stylish #stylish format
$ gendiff filepath1 filepath2 -f json #json format
$ gendiff filepath1 filepath2 -f plain #plain format
```

P.S. filepath1 и filepath2 - абсолютные или относительные пути к файлам