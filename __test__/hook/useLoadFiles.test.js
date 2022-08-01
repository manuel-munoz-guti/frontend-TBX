const { render, renderHook } = require("@testing-library/react");
const { useLoadFiles } = require("../../src/hooks/useLoadFiles");
import { demoData } from '../fixtures/fielsFixtures';

jest.mock('../../src/hooks/useLoadFiles.js');

describe('Test on Custom Hook Load Files', () => {
    
    const initialValues = {
        response: {
            ok: false,
            status: 0,
            code: '',
            message: ''
        },
        data: [],
        active: null
    }

    const finalValues = {
        response: {
            ok: true,
            status: 200,
            code: 'OK',
            message: 'OK'
        },
        data: demoData,
        active: null
    }

    test('Should return the default values', () => {

        useLoadFiles.mockReturnValue(initialValues);

        const { result } = renderHook( () => useLoadFiles() );
        const { response , data } = result.current;
        expect(response.ok).toBe(false);
        expect(data).toEqual([]);
    });

    test('should show the files after fetching the API', () => {
        
        useLoadFiles.mockReturnValue(finalValues);

        const { result } = renderHook( () => useLoadFiles() );
        const { response, data } = result.current;
        expect(response.ok).toBe(true);
        expect(data).toEqual(demoData);

    });
});