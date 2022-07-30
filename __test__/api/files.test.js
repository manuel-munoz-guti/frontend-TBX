const { fecthFilesList } = require("../../src/api/files");

describe('Test on files external api functions', () => {
    test('Should return an object response with OK and data', async () => {
        const resp = await fecthFilesList();
        const {data} = resp;
        expect( resp instanceof Object).toBe(true);
        expect( resp ).toHaveProperty('ok');
        expect( resp ).toHaveProperty('data');
    });
});