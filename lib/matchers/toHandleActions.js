import { toMatchSnapshot } from 'jest-snapshot';

export function toHandleActions(reducer, actionCreators) {
    const results = Object.entries(actionCreators).map(([name, actionCreator]) => {
        const state = undefined;
        const action = actionCreator();

        const result = reducer(state, action);

        return toMatchSnapshot.call(
            this,
            result,
            `${name} should match with snapshot`
        );
    });

    const failedSnapshot = results.find(({ pass }) => !pass);

    const successMessage = {
        pass: true,
        message: () => 'Reducer handled all actions correctly'
    };

    return failedSnapshot ? failedSnapshot : successMessage;
}