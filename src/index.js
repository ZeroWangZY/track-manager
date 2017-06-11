import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore ,applyMiddleware} from 'redux';
import mainReducer from './redux/reducer/index.js';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';


export const store = createStore(
    mainReducer,
    applyMiddleware(
        thunk
    )
);
ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider>,
  document.getElementById('root')
);
