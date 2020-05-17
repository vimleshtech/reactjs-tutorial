import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

///
import reducer from './reducers/rotateReducer';
import { Provider } from "react-redux";
//
import { createStore,applyMiddleware } from "redux";

import thunk from 'redux-thunk';

const logAction = store=>{

return next=>{
    return action =>{
        const result = next(action);

        console.log(`caught in the middleware ${JSON.stringify(result)}`);
    }
}
};
const store = createStore(reducer,applyMiddleware(logAction));
//const store = createStore(reducer); //,applyMiddleware(thunk)

ReactDOM.render(
    
    <Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
