import React from 'react';
import './index.css';
import {store} from './Components/redux/redux-store';
import {RootStateType} from './Components/redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';


let renderEntireTree = (state: RootStateType ) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(()=>{
    renderEntireTree(store.getState())
});