# jest-redux

[![Build Status](https://travis-ci.com/doniyor2109/jest-redux.svg?branch=master)](https://travis-ci.com/doniyor2109/jest-redux)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/doniyor2109/jest-redux/blob/master/LICENSE)

Jest matchers for testing redux easier and more declaritive.

# Table of Contents

 - [Getting start](#getting-start)
    - [Installation](#installation)
    - [Setup](#setup)
    - [Usage](#usage)
 - [API Reference](#api-reference)
    - [toHandleActions(reducer, actionCreators)](#tohandleactionsreducer-actioncreators)
    - [toHaveInitialState(reducer, initialState)](#tohaveinitialstatereducer-initialstate)
    - [toMatchActionCreatorsSnapshot(actionCreators)](#tomatchactioncreatorssnapshotactioncreators)
 - [License](#license)

# Getting start

## Installation

```bash

yarn add --dev jest-redux

```

or

```bash

npm install --save-dev jest-redux

```

## Setup

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

## Usage

Test your standart redux actions and reducers with one of the `jest-redux` matchers.

```js

const initialState = { number: 0 };

function reducer(state = initialState, action) {
 switch(action.type) {
   case "ADD":
    return state.number + action.payload;
   default:
     return state;
 }
}


expect(reducer).toHaveInitialState(initialState); // Passes tests
```

# API Reference

### `toHandleActions(reducer, actionCreators)`

Checks reducer to handle given actionCreators.

#### Example

```js
expect(reducer).toHandleActions(actions);
```

### `toHaveInitialState(reducer, initialState)`

Checks reducer against given intitialState.

#### Example

```js
expect(reducer).toHaveInitialState(initialState);
```

### `toMatchActionCreatorsSnapshot(actionCreators)`

Checks given action creators to match with previous snapshot.

#### Example

```js
expect(actionCreators).toMatchActionCreatorsSnapshot();
```

# License

MIT

