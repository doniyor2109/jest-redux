import { toMatchSnapshot } from 'jest-snapshot';

function toHandleActions(reducer, actionCreators) {
    const results = Object.entries(actionCreators).map(([name, actionCreator]) => {
        const state = undefined;
        const action = actionCreator({ payload: 'payload' });

        const result = reducer(state, action);

        return toMatchSnapshot.call(
            this,
            result,
            `${name} should match with snapshot`
        );
    });

    const isFailed = results.some(({ pass }) => !pass);

    const successMessage = {
        pass: true,
        message: () => 'Reducer handled all actions correctly'
    };
    const errorMessage = {
        pass: false,
        message: () => 'Reducer could not handle action',
    };

    return isFailed ? errorMessage : successMessage;
}

export default toHandleActions;