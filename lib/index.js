import * as matchers from './matchers/index';

const jestExpect = global.expect;

if (jestExpect) {
    jestExpect.extend(matchers);
} else {
    console.error('@sdutils/jest-matcher: Could not find jest. Please install jest library');
}