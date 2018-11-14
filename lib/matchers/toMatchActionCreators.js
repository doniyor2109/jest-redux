import { toMatchSnapshot } from 'jest-snapshot';
import fnArgs from 'fn-args';

const successMessage = {
    pass: true,
    message: () => 'all action creators are matched with snapshot'
};

function toMatchActionCreatorsSnapshot(actionCreators) {
    const results = Object.entries(actionCreators).map(([name, actionCreator]) => {
        const actionArguments = fnArgs(actionCreator);

        return toMatchSnapshot.call(
            this,
            actionCreator.apply(null, actionArguments),
            `${name} should match with snapshot`
        );
    });

    const failedSnapshot = results.find(({ pass }) => !pass);

    return failedSnapshot ? failedSnapshot : successMessage;
}

export default toMatchActionCreatorsSnapshot;


