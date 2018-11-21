# jest-redux

Jest matchers for testing redux easier and more declaritive.

# Installation

```bash

yarn add --dev jest-redux

```

or

```bash

npm install --save-dev jest-redux

```

# Setup

#### Via `setupTestFrameworkScriptFile` config

Add `jest-redux` to your Jest `setupTestFrameworkScriptFile` configuration

```json
"jest": {
  "setupTestFrameworkScriptFile": "jest-redux"
}
```

#### Via `setupTest` script

Require `jest-redux` from setupTest script

```js
// ./setupTest.js

require('jest-redux');
```

Then add this config

```json
"jest": {
  "setupTestFrameworkScriptFile": "./setupTest.js"
}
```

# API Reference

## `toHandleActions(reducer, actionCreators)`

Checks reducer to handle given actionCreators.

#### E.g

```js
expect(reducer).toHandleActions(actions);
```

## `toHaveInitialState(reducer, initialState)`

Checks reducer against given intitialState.

#### E.g

```js
expect(reducer).toHaveInitialState(initialState);
```

## `toMatchActionCreatorsSnapshot(actionCreators)`

Checks given action creators to match with previous snapshot.

#### E.g

```js
expect(actionCreators).toMatchActionCreatorsSnapshot();
```


