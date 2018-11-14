import { toMatchSnapshot } from 'jest-snapshot';
import fnArgs from 'fn-args';

function toMatchActionCreatorsSnapshot(actionCreators) {
    const results = Object.entries(actionCreators).map(([name, actionCreator]) => {
        const actionArguments = fnArgs(actionCreator);

        return toMatchSnapshot.call(
            this,
            actionCreator.apply(null, actionArguments),
            `${name} should match with snapshot`
        );
    });

    const isFailed = results.some(({ pass }) => !pass);

    const successMessage = {
        pass: true,
        message: () => 'all action creators are matched with snapshot'
    };
    const errorMessage = {
        pass: false,
        message: () => 'snapshot failed',
    };

    return isFailed ? errorMessage : successMessage;
}

export default toMatchActionCreatorsSnapshot;


