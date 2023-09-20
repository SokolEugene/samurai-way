import React from 'react';
import './index.css';
import {RootStateType, store} from './Components/redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';


let renderEntireTree = (state: RootStateType ) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(renderEntireTree);