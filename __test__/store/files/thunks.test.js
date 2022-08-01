const { startLoadingFiles, startLodingFile } = require("../../../src/store/files/thunks");

describe('Test on thunks function of Redux', () => {

    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should startLoadingFiles thunk to have been called', async() => {

        await startLoadingFiles() (dispatch);
        expect(dispatch).toHaveBeenCalled();

    });

    test('should startLoadingFiles thunk to have been called', async() => {

        await startLodingFile() (dispatch);
        expect(dispatch).toHaveBeenCalled();

    });

});