const { fetchFilesList, fetchFile } = require("../../src/api/files");

describe('Test on files external api functions', () => {
    test('Should return fetchFilesList an object response with OK and data', async () => {
        const { data } = await fetchFilesList();
        expect( data instanceof Object).toBe(true);
        expect( data ).toHaveProperty('ok');
        expect( data ).toHaveProperty('data');
    });
    test('Should return fetchFile an object response with OK and data', async () => {
        const { data } = await fetchFile('test2.csv');
        expect( data instanceof Object).toBe(true);
        expect( data ).toHaveProperty('ok');
        expect( data ).toHaveProperty('data');
    });
    test('Should return fetchFile an 404 if could not find a file', async () => {
        const { data } = await fetchFile('filenotExist');
        expect( data instanceof Object).toBe(true);
        expect( data ).toHaveProperty('ok');
        expect( data ).toHaveProperty('data');
        expect( data.ok ).toEqual(false);
        expect( data.msg ).toEqual('Not Found');
    });
});