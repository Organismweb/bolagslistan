# Bolagslistan V3

## Flow

Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive.
Making you code faster, smarter, more confidently, and to a bigger scale.

In this project the following flow commands are avaiable:

* `yarn flow`
* `yarn flow:stop`
* `yarn flow:status`
* `yarn flow:coverage`

For more information about flow visit the website: https://flow.org/

### Todo Flow

* [ ] Add a simple example of a component using flow.

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

* Jest: https://facebook.github.io/jest/docs/en/api.html
* Enzyme: http://airbnb.io/enzyme/docs/api/
* Testing Styled Components: https://github.com/styled-components/jest-styled-components
