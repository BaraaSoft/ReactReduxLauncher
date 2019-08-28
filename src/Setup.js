import React from 'react';
import reducers from './reducers';
//import epics from './Epics';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';


const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools(
    applyMiddleware(epicMiddleware, thunk)
);
const store = createStore(reducers, composeEnhancers)
//epicMiddleware.run(epics);

const Setup = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default Setup