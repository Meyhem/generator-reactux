# Yeoman generator-reactux

Opinionated Yeoman generator for generating "feature oriented" project structure with preconfigured parts.

## Before start
This generator scaffolds sources with specific packages in mind. Before you start you should __install following dependencies:__

_redux react-redux redux-saga reselect typesafe-actions styled-components_

__And devDevdependencies:__

 _@types/styled-components prettier typescript eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import_

## Commands

__Initialize store:__ (Run this once to generate store structure)

```bash
$ yo reactux:store
```
_Generates rootReducer, rootSaga, store & types_

---

__Generate feature:__
```bash
$ yo reactux:feature <feature name>
```
_Generates a feature in feature folder, containing actions, reducer, saga and selector. All exposed trough index file._

---

__Generate page:__
```bash
$ yo reactux:page <page name>
```
_Generates Redux Connected page component_

---

__Generate component:__
```bash
$ yo reactux:component <component name>
```
_Generates component_

## Options
Generator allows to specify target folders and can be configured through __.yo-rc.json__

Default values for __.yo-rc.json__ are:
```json
{
    "generator-reactux": {
        "src": "src",
        "features": "src/features",
        "pages": "src/pages",
        "components": "src/components"
    }
}
```

