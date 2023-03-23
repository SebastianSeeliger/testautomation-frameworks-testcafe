# TestCafé

This template is an example of how to implement automated tests using TestCafé with TypeScript and Page Object pattern.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
1. Use the terminal and navigate to this test project
2. Run the following commands 
```sh
npm install typescript
yarn tsc --init
yarn add testcafe --save-dev
yarn add -D testcafe
```
## How to run tests
1. Use the terminal and navigate to this test project
2. Run the following command 
```sh
npx testcafe chrome src/tests
```

Of course, you also can use other browsers like firefox, just change the browser name in the previous command

## Copyright
This template was created by [IT-Service Seeliger](https://its-seeliger.de/)