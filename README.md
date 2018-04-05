# Bolagslistan V3

## Testing

This app is using Jest & Enzyme for react testing.
Use the following yarn/npm tasks to run tests:

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
- MyComponentFolder
  - MyComponent.js
  - __tests__
    - myTest.js
```

### Documentation on testing libs:

* Jest: https://facebook.github.io/jest/docs/en/api.html
* Enzyme: http://airbnb.io/enzyme/docs/api/
* Testing Styled Components: https://github.com/styled-components/jest-styled-components
