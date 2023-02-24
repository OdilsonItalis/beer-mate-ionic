# Beer Mate App

The [Beer Mate App](https://www.beermate.app) is built the Ionic framework.

## Prerequirements

- Ionic CLI 6.x.x
- Node 18.14.x

## Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts) and [Ionic scripts](https://ionicframework.com/docs/cli/).

Tasks                               | Description
------------------------------------|---------------------------------------------------------------------------------------
yarn start                          | Run development server on `http://localhost:4200/` (bs default)
ionic build                         | Create build inside www folder

## Project structure

```
global.scss                  app global styles
src/                         project source code
|- app/                      app components
|  |- app.component.*        app root component (shell)
|  |- app.component.html     app root component template
|  |- app.component.scss     app root component styles
|  |- app.module.ts          app root module definition
|  |- components/            global components (header, footer etc.)
|  |- directives/            shared directives
|  |- enums/                 app related enumerations (network status)
|  |- interfaces/            app related interfaces (header options)
|  |- models/                app related data models (topics, exams, sections)
|  |- pages/                 app pages (login, register, lists...)
|  |- pipes/                 shared pipes
|  |- services/              shared services
|- assets/                   app assets (images, fonts, translations...)
|- environments/             environment related configuration
|- theme/                    scss variables
|- index.html                html entry point
www/                         compiled version
```
