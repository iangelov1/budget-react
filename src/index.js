import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux';
import storeConfig from './store/configereSotre';

const store = storeConfig()

ReactDOM.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>,
    document.getElementById('root')
); 
