import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addMessage, addPost, RootStateType, updateNewMessage, updateNewPost} from './Components/redux/state';

export let renderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPost={updateNewPost}
             addMessage={addMessage}
             updateNewMessage={updateNewMessage}/>,
        document.getElementById('root')
    );
}
