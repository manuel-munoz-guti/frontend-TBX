const { renderHook, render, screen } = require("@testing-library/react");
const { FilesTable } = require("../src/components/FilesTable");
const { useLoadFiles } = require("../src/hooks/useLoadFiles");
const { LoadingFiles } = require("../src/ui/components/LoadingFiles");
const { demoData } = require("./fixtures/fielsFixtures");
import App from '../src/App';

jest.mock('../src/hooks/useLoadFiles.js');

describe('Test on React App Component', () => {

    const initialValues = {
        loading: true,
        data: []
    }

    const finalValues = {
        loading: false,
        data: demoData
    }
    
    test('Should return the progress Bar initially', () => {

        useLoadFiles.mockReturnValue(initialValues);

        const { result } = renderHook( () => useLoadFiles() );
        const { loading, data } = result.current;
        
        render(<App />);

        expect( screen.getByText('Loading(0%)...') );

    });

    test('Should retrun the table of files after fetching the data from API', () => {

        // useLoadFiles.mockReturnValue(finalValues);
    
        // const { result } = renderHook( () => useLoadFiles(finalValues) );
        // const { loading, data } = result.current;

        // console.log(loading, data);

      
        //     const { debug } = render(<App />);
    
         
        // debug();
        // // console.log(screen.getAllByText(' ') );
        // screen.debug();
        // expect( screen.getByText('File Name') );
    });
});