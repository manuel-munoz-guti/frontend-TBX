const { fecthFilesList } = require("../../../src/api/files");
const { startLoadingFiles } = require("../../../src/store/files/thunks");

describe('Test on thunks function of Redux', () => {

    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should startLoadingFiles thunk to have been called', async() => {

        await startLoadingFiles() (dispatch);
        expect(dispatch).toHaveBeenCalled();

    });

});