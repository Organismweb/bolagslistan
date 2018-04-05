# Bolagslistan V3

### Todo

* [ ] Add a simple example of a component using Flow.
* [x] Add a proper prettier integration with ESLint.
* [ ] Add a simple test example for a component and for a styled component.

## Flow

Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive.
Making you code faster, smarter, more confidently, and to a bigger scale.

In this project the following flow commands are avaiable:

* `yarn flow`
* `yarn flow:stop`
* `yarn flow:status`
* `yarn flow:coverage`

For more information about flow visit the website: https://flow.org/

## Testing

This app is using Jest & Enzyme for react testing.
Use the following yarn/npm commands to run tests:

* `yarn test`
* `yarn test:watch`
* `yarn test:coverage`
* `yarn test:snapfix`

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.

### Where should I write my tests?

If you are creating a new component put the unit tests in a `__tests__` folder.
For example:

```
- MyAmazingComponent
  - index.js
  - __tests__
    - index.js
```

### Documentation on testing libs:

* [Jest](https://facebook.github.io/jest/docs/en/api.html)
* [Enzyme](http://airbnb.io/enzyme/docs/api/)
* [Testing Styled Components](https://github.com/styled-components/jest-styled-components)

## Prettier
Prettier is currently setup with the following packages:
* https://github.com/prettier/eslint-plugin-prettier
* https://github.com/prettier/eslint-config-prettier

Basically it turns of ESLint rules relating to formatting and allows Prettier to format the code instead.
It also reports formatting errors as ESLint issues.

## VS Code

If your are using VS Code, the following plugins will be necessary.

* [Flow Language Support](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
