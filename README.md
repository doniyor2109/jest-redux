# jest-redux

Jest matchers for testing redux easier and more declaritive.

[![Build Status](https://travis-ci.com/doniyor2109/jest-redux.svg?branch=master)](https://travis-ci.com/doniyor2109/jest-redux)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/doniyor2109/jest-redux/blob/master/LICENSE) [![Greenkeeper badge](https://badges.greenkeeper.io/doniyor2109/jest-redux.svg)](https://greenkeeper.io/)

# Table of Contents

 - [Getting start](#getting-start)
    - [Installation](#installation)
    - [Setup](#setup)
    - [Usage](#usage)
 - [API Reference](#api-reference)
    - [toHandleActions(reducer, actionCreators)](#tohandleactionsreducer-actioncreators)
    - [toHaveInitialState(reducer, initialState)](#tohaveinitialstatereducer-initialstate)
    - [toMatchActionSnapshot(actionCreators)](#tomatchactioncreatorssnapshotactioncreators)
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
   case "REMOVE":
    return state.number + action.payload;
   default:
     return state;
 }
}

const actionCreators = {
 add: (number) => ({ type: "ADD", payload: number }),
 remove: (number) => ({ type: "REMOVE", payload: number }),
};


expect(reducer).toHaveInitialState(initialState); // Passes tests

expect(reducer).toHandleActions(actions); // Passes tests
```

# API Reference

### `toHandleActions(reducer, actionCreators)`

Checks reducer to handle given action creators. Compares snpashots of returned reducer result for given actions.

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

### `toMatchActionSnapshot(actionCreators)`

Checks given action creators to match with previous snapshot.

#### Example

```js
expect(actionCreators).toMatchActionSnapshot();
```

# License

MIT

