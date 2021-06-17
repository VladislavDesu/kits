# Frontend starter template

# Технологии

```bash
- Чистый **`HTML5`**
- Sematic layout
- Adaptive and Responsive layout
- Methodology **`BEM`**
- CSS preprocessor **`SCSS`**
- Native **`JavaScript`**
- Task runner **`Gulp`**
```

## Общее

- BEM (именование классов), Gulp Scss, Pug;
- Используется код-гайд [htmlacademy](https://codeguide.academy/).

## Файловая структура

```bash
build/     # Папка сборки
dev/       # Папка с исходниками для разработки
```

## Команды

```bash
npm i                  # Установка всех необходимых зависимостей
npm start              # Запуск проекта с сервером (либо команда gulp dev)
npm run build          # Запуск проекта без сервера (либо команда gulp)
npm run webp           # Конвертация картинок в формат Webp
npm lint               # Проверка всех файлов стилей, html файлов и js файлов на соответствие правилам (см. .stylelintrc , .htmlhintrc и .eslintrc  соответственно)
npm lint-fix           # Исправление ошибок валидации стилевых файлов и js файлов (html ошибки не исправляет)
npm run lint:style     # Проверить только стилевых файлов
npm run lint:js        # Проверить только js файлов
npm run lint:html      # Проверить только html файловв
npm run lint:style-fix # Исправление только стилевых файлов
npm run lint:js-fix    # Исправление только js файлов
```

## Как работает

При `npm start` запускается gulp задача - dev:

1. Очищается папка сборки (`build/`).
2. Шрифты (.ttf) и конвертируются в формат woff и woff2, шрифты сохраняются в папку сборки.
3. Картинки (jpeg, png, svg) проходят через минификацию, картинки сохраняются в папку сборки.
4. Инициализируется sourcemap для стилей, компилируются препроцессорные файлы стилей, группируются медиавыражения и добавляются префиксы, проходят через минификацию, файлы стилей сохраняются в папку сборки.
5. Скрипты проходят через минификацию, файлы скриптов сохраняются в папку сборки.
6. Разметка конвертируется с формата Pug в чистый HTML, проходит через минификацию.
7. Запускается сервер:
   - следит за изменениями в:
     - `dev/layout/**/*.pug`
     - `dev/scripts/**/*.js`
     - `dev/styles/**/*.+(scss|sass|less)`
     - `dev/images/**/*.{png,jpg,gif,svg}`
     - `dev/fonts/**/*.ttf`
   - запускает необходимые задачи при изменении файлов.
8. При внесении изменений, страница автоматически перезагружается.
9. Для генерации изображений в формате `.webp` необходимо запустить задачу `npm run webp`. Изображения создаются на основе исходный файлов в папке `dev/images/` и сохраняются в папку `build/images`.

<!-- ## Разметка

Повторяющиеся части (такие, как header и footer) располагаются в `src/html/parts/`.
Уникальные, для каждой страницы, на уровень выше `src/html/`.
Непосредственно в них подключаются header, footer и т.п. -->

<!-- ## Стили

Все стили располагаются в `src/less/`. Для каждого компонента или блока создается отдельный less-файл.

- `src/less/helpers/` - переменные и миксины.
- `src/less/base/` - базовые стили.
- `src/less/components/` - отдельные встраиваемые компоненты, виджеты и т.п.
- `src/less/layout/` - блоки, такие как header, footer.
- `src/less/pages/` - (опционально) стили, уникальные для конкретной страницы.
- `src/less/other/` - (опционально) стили, не соответствующие категориям выше (анимация, которая используется для нескольких независимых блоков, классы хелперы и т.д.).
- `src/less/template.less` - главный стилевой файл, в который импортируются все компоненты. -->

### Стилевой код-гайд по BEM

1. БЭМ-именование: `__` — разделитель элемента, `--` — разделитель модификатора.
2. Для каждого блока создается отдельный файл стилей.
3. Очередность селекторов:
   - Стилевые правила сущности.
   - Медиаусловия.
   - Псевдоселекторы и псевдоэлементы.
   - Сторонние вложенные селекторы.
   - Элементы блока.
   - Модификаторы блока.

## Скрипты

`dev/scripts/` - файлы со скриптами.

## GIT

`.gitconfig` - прописаны алиасы для git-команд.  
`.gitignore` - указаны папки и файлы, которые будут игнорироваться.

## Линтинг

Для проверки кода на ошибки и соответствие код-гайдам используются конфиги [htmlacademy](https://github.com/htmlacademy/codeguide).

`.eslintrc` - конфиг для проверки js [eslint](https://eslint.org/).  
`.eslintignore` - здесь указываются файлы/папки, которые будут игнорироваться.  
`.htmlhintrc` - конфиг для проверки html [htmlhint](https://htmlhint.com/).  
`.stylelintrc` - конфиг для проверки less [stylelint](https://stylelint.io/).

# Installation

- Install this repository to your device.
- Open it in any Text Editor and run **`npm i`** in your console (for download all packages). You can find a list of all packages in the [package.json](https://github.com/VladislavDesu/koroka-solutions-test/blob/master/package.json) file.
- You can build project by running **`npm run build`** code.
- You can also run **`npm run start`** code, then project will also build, but also start a local server ([Browsersync](https://browsersync.io/)), for comfortable project review or development.

# Structure & Navigation

## Folders

The project consists of two main folders [src](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/src) and [build](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/build).

## Gulpfile.js

I used [Gulp](https://gulpjs.com/) to Develop and Build this project. All gulp's tasks you can find in the [gulpfile.js](https://github.com/VladislavDesu/koroka-solutions-test/blob/master/gulpfile.js) file.

All styles were created by **`SCSS`** code, you can find all source styles in [src/styles](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/src/styles) folder, **`Gulp`** converted all **`SCSS`** files into one build and minify **`CSS`** file ([build/css](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/build/css)).

All images and icons minify by **`Gulp`** task, you can find all images and icons in [src](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/src) folder, **`Gulp`** minify all images and icons and created images with webp format ([build](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/build)).

All fonts you can find in [src/fonts](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/src/fonts) , **`Gulp`** converted all fonts from ttf format to woff2 & woff formats ([build/fonts](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/build/fonts)).

All other files **`Gulp`** copy form [src](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/src) folder to [build](https://github.com/VladislavDesu/koroka-solutions-test/tree/master/build) folder.

## Package.json

This file contains of information about project and list of all packages [package.json](https://github.com/VladislavDesu/koroka-solutions-test/blob/master/package.json).
