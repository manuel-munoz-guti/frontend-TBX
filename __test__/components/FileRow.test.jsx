const { render } = require("@testing-library/react");
import { Table } from 'react-bootstrap';
import { FileRow } from '../../src/components/FileRow';

describe('Test On component FileRow', () => {

    const file = 'test1.csv';
    const line = {
        "text": "UFNWbIeTSjoySbvQBMbLqp",
        "number": 87,
        "hex": "7ac6f24ef988372576935d449d02176f"
    };
    

    test('Should match with snapshot', () => {
        const {container} = render( 
            <Table>
        
            <tbody>
                <FileRow key={line.hex} line={line} fileName={file}/>
            </tbody>
          
            </Table>
     
        );
        expect(container).toMatchSnapshot();
    });

    
});