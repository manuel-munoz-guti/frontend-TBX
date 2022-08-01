const { filesSlice, setData, setActiveData, setClearResponse } = require("../../../src/store/files/filesSlice");
const { initialState, finalState, demoData, finalStateWithNoData, finalStateSingle } = require("../../fixtures/fielsFixtures");

describe('Test on slice of store Redux filesSlice', () => {
    test('should call filesSlice and return the initial state', () => {
        expect(filesSlice.name).toBe('files');
        const state = filesSlice.reducer( initialState, {});
        expect(state).toEqual(initialState);
    });
    test('should return final state after calling setData action from reducer', () => {
        const state = filesSlice.reducer(initialState, setData(demoData));
        expect(state).toEqual(finalState);
    });
    test('should return final state with no data after calling setData action from reducer', () => {
        const state = filesSlice.reducer(initialState, setData());
        expect(state).toEqual(finalStateWithNoData);
    });
    test('should return final state of silge file after calling setActiveData action from reducer', () => {
        const state = filesSlice.reducer(initialState, setActiveData(demoData));
        expect(state).toEqual(finalStateSingle);
    });
    test('should return new state after calling setClearResponse action from reducer', () => {
        const state = filesSlice.reducer(initialState, setClearResponse());
        expect(state).toEqual({
            response: { ok: false, status: 0, code: '', message: '' },
            data: [],
            active: null
          });
    });
});
