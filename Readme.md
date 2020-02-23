# Yeoman generator-reactux

Opinionated Yeoman generator for generating "feature oriented" project structure that uses **redux, redux-saga, typesafe-actions and reselect**.

## Commands

__Initialize store:__ (Run this once to generate store structure)

```bash
$ yo reactux:store
```
_Generates rootReducer, rootSaga, store & types_

__Generate feature:__
```bash
$ yo reactux:feature <feature name>
```
_Generates a feature in feature folder, containing actions, reducer, saga and selector. All exposed trough index file._

__Generate page:__
```bash
$ yo reactux:page <page name>
```
_Generates Redux Connected page component_

## Project structure

![](https://raw.githubusercontent.com/Meyhem/generator-reactux/readme-resources/filestructure.png)

## Options
Generator allows to specify where the "features" folder will live inside the project (by default 'src/features') and can be configured through __.yo-rc.json__

```json
{
    "generator-reactux": {
        "featureFolder": "src/features"
    }
}
```

