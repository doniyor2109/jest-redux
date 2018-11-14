/* tslint:disable:no-namespace */

declare namespace jest {
	interface Matchers {
        toMatchActionCreators: () => void
        toHandleActions: (actions: any) => void
        toHaveInitialState: (initialState: any) => void
	}
}