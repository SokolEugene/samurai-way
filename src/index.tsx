import React from 'react';
import './index.css';
import {RootStateType, store} from './Components/redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';


let renderEntireTree = (state: RootStateType ) => {
    ReactDOM.render(
        <App state={state}
             addPost={store.addPost.bind(store)}
             updateNewPost={store.updateNewPost.bind(store)}
             addMessage={store.addMessage.bind(store)}
             updateNewMessage={store.updateNewMessage.bind(store)}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(renderEntireTree);