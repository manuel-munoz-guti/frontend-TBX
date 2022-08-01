const { renderHook, render } = require("@testing-library/react");
import App from '../src/App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { setClearResponse } from '../src/store/files';
import { setNotLoading } from '../src/store/ui/uiSlice';

jest.mock('../src/hooks/useLoadFiles.js');

describe('Test on React App Component', () => {

    const initialValues = {
        ui: {
            isTyping: false,
            isLoading: true,
        }
    }

    const mockStore = configureStore();
    let store;

    test('Should get the initial values from store', () => {
        store = mockStore(initialValues);
        expect(store.getState()).toEqual(initialValues);
    });

    test('Should get the initial values from store', () => {
        store = mockStore(initialValues); 
        
        // Dispatch the action
        store.dispatch(setNotLoading());
        
        // Test if your store dispatched the expected actions
        const actions = store.getActions();
        const expectedPayload = { "payload": undefined, "type": "ui/setNotLoading" };
        expect(actions).toEqual([ expectedPayload ]);
    });
});