const { filesSlice, setData } = require("../../../src/store/files/filesSlice");
const { initialState, finalState, demoData, finalStateWithNoData } = require("../../fixtures/fielsFixtures");

describe('Test on slice of store Redux filesSlice', () => {
    test('should call filesSlice and return the initial state', () => {
        expect(filesSlice.name).toBe('files');
        const state = filesSlice.reducer( initialState, {});
        expect(state).toEqual(initialState);
    });
    test('should call setData after fetching the data from the external API', () => {
        const state = filesSlice.reducer(initialState, setData(demoData));
        expect(state).toEqual(finalState);
    });
    test('should call setData after fetching with no data from the external API', () => {
        const state = filesSlice.reducer(initialState, setData());
        expect(state).toEqual(finalStateWithNoData);
    });
    
});