const { render, screen } = require("@testing-library/react");
const { MyNav } = require("../../src/components/MyNav");

describe('Test on component MyNav', () => {
    test('Should match with the snapshost', () => {
        const { container } = render(<MyNav/>);
        expect(container).toMatchSnapshot(); 
    });
    test('Should the header will have the text', () => {
        render(<MyNav />);
        expect(screen.getByText('REACT CHALLENGE - TBX'));
    });
});