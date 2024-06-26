### Hexlet tests and linter status:

[![Actions Status](https://github.com/zebpaa/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zebpaa/frontend-project-46/actions)

<h1 style="text-align: center;">2-ой учебный проект на Хекслет: 'Вычислитель отличий'</h1>

<a href="https://ru.hexlet.io/programs/frontend/projects/46">Ссылка на проект</a>

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например <a href="http://www.jsondiff.com/">http://www.jsondiff.com/</a>. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

<a href="https://asciinema.org/a/L6dIcfqijxmjI2FIzmSnwkRbT">Пример использования</a>

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
```
