# Frontend starter template

## Технологии

```bash
- BEM
- Gulp
- Webpack
- Pug
- Scss
- JavaScript
- Lints
```

## Команды

```bash
npm i                  # Установка всех необходимых зависимостей
npm run prepare        # Установка и настройка husky (запускается один раз командой npm i)
npm start              # Запуск проекта для разработки с сервером (либо команда gulp dev)
npm run build          # Сборка проекта (либо команда gulp)
npm run prod           # Сборка проекта для продакшена (либо команда gulp --prod)
npm run webp           # Конвертация картинок в формат Webp
npm run csscomb        # Проверка всех файлов стилей на соответствие правилам (см. .csscomb)
npm lint               # Проверка всех файлов стилей, html файлов и js файлов на соответствие правилам (см. .stylelintrc , .htmlhintrc и .eslintrc  соответственно)
npm lint-fix           # Исправление ошибок валидации стилевых файлов и js файлов (html ошибки не исправляет)
npm run lint:style     # Проверить только стилевые файлы
npm run lint:js        # Проверить только js файлов
npm run lint:html      # Проверить только html файловв
npm run lint:style-fix # Исправление только стилевых файлов
npm run lint:js-fix    # Исправление только js файлов
```

## Как работает

При `npm start` запускается gulp задача - `dev`:

1. Очищается папка сборки (`build/`).
2. Копируются папки с их содержимым.
3. Шрифты (`.ttf`) и конвертируются в формат `woff` и `woff2`, шрифты сохраняются в папку сборки.
4. Картинки (`jpeg, png, svg`) проходят через минификацию, картинки сохраняются в папку сборки.
5. Инициализируется `sourcemap` для стилей, компилируются препроцессорные файлы стилей, группируются медиавыражения и добавляются префиксы, проходят через минификацию, файлы стилей сохраняются в папку сборки.
6. Скрипты проходят через минификацию, файлы скриптов сохраняются в папку сборки.
7. Разметка конвертируется с формата `Pug` в чистый `HTML`, проходит через минификацию.
8. Запускается сервер:
   - следит за изменениями в:
     - `dev/layout/*.+(pug|html)`
     - `dev/scripts/**/*.js`
     - `dev/styles/**/*.+(scss|sass|less|css)`
     - `dev/images/**/*.{png,jpg,gif,svg}`
     - `dev/fonts/**/*.ttf`
   - запускает необходимые задачи при изменении файлов.
9. При внесении изменений, страница автоматически перезагружается.
10. Для генерации изображений в формате `.webp` необходимо запустить задачу `npm run webp`. Изображения создаются на основе исходный файлов в папке `dev/images/` и сохраняются в папку `build/images/`.

При `npm run build` запускается gulp задача - `default`:

1. Запускается всё тоже самое что и у задачи `dev` только без сервера.

## Стилевой код-гайд

Используется код-гайд [htmlacademy](https://codeguide.academy/).

## BEM

1. БЭМ-именование: `__` — разделитель элемента, `--` — разделитель модификатора.
2. Для каждого блока создается отдельный файл стилей.
3. Очередность селекторов:
   - Стилевые правила сущности.
   - Медиаусловия.
   - Псевдоселекторы и псевдоэлементы.
   - Сторонние вложенные селекторы.
   - Элементы блока.
   - Модификаторы блока.

## Разметка

Все файлы располагаются в `dev/layout/`. Для каждого компонента или блока создается отдельный файл.

- `dev/layout/content/` - контент страниц.
- `dev/layout/page/` - начальная разметка страниц.
- `dev/layout/sections/` - cекционные блоки контента.
- `dev/layout/modules/` - header, footer.
- `dev/layout/*.+(pug|html)` - главные файлы, куда включается основная часть с папки `page/` (переменные, контент, скрипты).

## Стили

Все стили располагаются в `dev/styles/`. Для каждого компонента или блока создается отдельный файл.
Для использования другого препроцессора переименуйте все файлы в `dev/styles/` в нужное расширение.

- `dev/styles/helpers/` - переменные и миксины.
- `dev/styles/base/` - базовые стили и шрифты.
- `dev/styles/sections/` - cекционные стили.
- `dev/styles/components/` - отдельные встраиваемые компоненты, виджеты и т.п.
- `dev/styles/modules/` - блоки, такие как header, footer.
- `dev/styles/libs/` - стили установленных библеотек.
- `dev/styles/media/` - стили для адаптивных сайтов (mobile first или desktop first).
- `dev/styles/styles.+(scss|sass|less)` - главный стилевой файл, в который импортируются все компоненты.

## Скрипты

`dev/scripts/` - файлы со скриптами.

## Git

`.gitignore` - указаны папки и файлы, которые будут игнорироваться.

## EditorConfig

Для корректной работы нужно установить плагин для вашего редактора или IDE.
Список редакторов и IDE для которых нужно установить плагин [EditorConfig](https://editorconfig.org/#download)
Список редакторов и IDE для которых плагин не нужен [EditorConfig](https://editorconfig.org/#pre-installed)

## Линтинг

Для проверки кода на ошибки и соответствие код-гайдам используются конфиги [htmlacademy](https://github.com/htmlacademy/codeguide).

`.eslintrc` - конфиг для проверки js [eslint](https://eslint.org/).
`.eslintignore` - здесь указываются файлы/папки, которые будут игнорироваться.

`.htmlhintrc` - конфиг для проверки `html` [htmlhint](https://htmlhint.com/).  
`.stylelintrc` - конфиг для проверки (`less, scss, sass`) [stylelint](https://stylelint.io/).

## Gulp

- Папка `gulp`:

  - Папка `tasks` - папка со всеми задачами
  - Файл `dependencies` - массив со всеми зависимостями
  - Файл `path` - обьект с путями проекта

- Файл `gulpfile.js`:
  - Подключаются все файлы из папки `gulp`

## Webpack

- Файл `webpack.config.js`:
  - Конфигурационный файл `webpack`
