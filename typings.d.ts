/* tslint:disable:no-namespace */

declare namespace jest {
	interface Matchers {
        toMatchActionSnapshot: () => void
        toHandleActions: (actions: any) => void
        toHaveInitialState: (initialState: any) => void
	}
}