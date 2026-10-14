# GitHub → Vercel

Репозиторий создаётся из этой папки (`portfolio`), где лежит `index.html`.
Сайт статический: сборка и установка зависимостей не нужны.

## Первый push

Установить Git for Windows, открыть новый терминал в папке `portfolio`.
Создать пустой репозиторий на GitHub без README, лицензии и .gitignore.

```powershell
git init -b main
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Заменить USERNAME и REPOSITORY на адрес созданного репозитория.
Если Git попросит имя и email автора, указать свои данные в локальных
настройках репозитория (`git config user.name` и `git config user.email`).
Авторизацию GitHub пройти в браузере; токен в файлы проекта не сохранять.

## Импорт в Vercel

Add New → Project → Import Git Repository.

- Framework Preset: Other.
- Root Directory: корень репозитория, если загружено содержимое `portfolio`.
  Если загружена вся рабочая папка, выбрать `portfolio`.
- Build Command: включить Override и оставить пустым.
- Output Directory: `.`.
- Install Command: включить Override и оставить пустым.
- Production Branch: `main`.

Нажать Deploy и проверить страницы на выданном адресе.
В Settings → Domains добавить купленный домен и скопировать показанные
Vercel DNS-записи в управление доменом у регистратора.

## Обновления

После правок проверить сайт локально (`npm run dev`) и синтаксис
(`npm run check`). Перед отправкой просмотреть изменения:

```powershell
git status
git diff
git add .
git commit -m "Update portfolio"
git push
```

Push в `main` запускает публикацию на основном домене.
Для предварительного просмотра отправить изменения в отдельную ветку;
Vercel создаст Preview. После проверки объединить её с `main`.
DNS при обновлениях менять не нужно.

Документация: https://vercel.com/docs/git
