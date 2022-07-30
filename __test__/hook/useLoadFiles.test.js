const { render, renderHook } = require("@testing-library/react");
const { useLoadFiles } = require("../../src/hooks/useLoadFiles");
import App from '../../src/App';
import { demoData } from '../fixtures/fielsFixtures';

jest.mock('../../src/hooks/useLoadFiles.js');

describe('Test on Custom Hook Load Files', () => {
    
    const initialValues = {
        loading: true,
        data: []
    }

    const finalValues = {
        loading: false,
        data: demoData
    }

    test('Should return the default values', () => {

        useLoadFiles.mockReturnValue(initialValues);

        const { result } = renderHook( () => useLoadFiles() );
        const { loading, data } = result.current;
        expect(loading).toBe(true);
        expect(data).toEqual([]);
    });

    test('should show the files after fetching the API', () => {
        
        useLoadFiles.mockReturnValue(finalValues);

        const { result } = renderHook( () => useLoadFiles() );
        const { loading, data } = result.current;
        expect(loading).toBe(false);
        expect(data).toEqual(demoData);

    });
});