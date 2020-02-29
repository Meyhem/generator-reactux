# Yeoman generator-reactux

Opinionated Yeoman generator for generating robust React app structure.

## Quickstart

Install Yeoman and Reactux generator
```bash
$ yarn global add yo
$ yarn global add generator-reactux
```

Create new React project using CRA2 if you haven't done yet:

```bash
$ yarn create react-app --template typescript <project name>

$ cd <project name>
```

Before you start scaffolding your sources, you need to install some packages used in scaffolded sources.

**Install needed dependencies:**
```bash
$ yarn add redux react-redux redux-saga reselect typesafe-actions styled-components react-router connected-react-router history i18next react-i18next
```

**and devDevdependencies:**

```bash
$ yarn add --dev @types/styled-components @types/history @types/react-router @types/react-redux prettier typescript eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import
```

Then scaffold reactux base structure inside project root
```base
$ yo reactux:base
```

Now just render the preconfigured component **&lt;AppRoot/&gt;** from *root.tsx* as your *index.ts* and you can start scaffolding __components__, __pages__ and __features__.

## Commands

**Initialize theme, eslint, prettier, rootReducer, rootSaga, store, theme, i18n, types...** (Run this once)

```bash
$ yo reactux:base
```

_Generates all necessary redux, routing, theme, i18n structures... **root.tsx** will be created as application root with provider & router. You need to render it manually (e.g. in index.tsx)_

---

**Generate feature:**

```bash
$ yo reactux:feature <feature name>
```

_Generates a feature in feature folder, containing actions, reducer, saga and selector. All exposed trough index file._

---

**Generate page:**

```bash
$ yo reactux:page <page name>
```

_Generates Redux Connected page component_

---

**Generate component:**

```bash
$ yo reactux:component <component name>
```

_Generates view scomponent_

## Options

Generator allows to specify target folders and can be configured through **.yo-rc.json**

Default values for **.yo-rc.json** are:

```json
{
  "generator-reactux": {
    "root": ".",
    "src": "src",
    "features": "src/features",
    "pages": "src/pages",
    "components": "src/components"
  }
}
```
