# Example app


```bash
yarn create react-app --template typescript example
cd example
yo reactux:base
# manually render <AppRoot /> in index.ts
yo reactux:feature post
yo reactux:feature account
# manually register reducers in rootReducer.ts
yo reactux:component footer
yo reactux:component header
yo reactux:component somethingElse
yo reactux:page login
yo reactux:page main
yo reactux:page post
yo reactux:page categories

yarn start
# Start hacking
```