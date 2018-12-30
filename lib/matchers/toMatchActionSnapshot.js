import { toMatchSnapshot } from 'jest-snapshot';

const successMessage = {
    pass: true,
    message: () => 'all action creators are matched with snapshot'
};

export function toMatchActionSnapshot(actionCreators) {
    const results = Object.entries(actionCreators).map(([name, actionCreator]) => {
        return toMatchSnapshot.call(
            this,
            actionCreator.apply(null),
            `${name} should match with snapshot`
        );
    });

    const failedSnapshot = results.find(({ pass }) => !pass);

    return failedSnapshot ? failedSnapshot : successMessage;
}


