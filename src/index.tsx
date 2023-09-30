import React from 'react';
import './index.css';
import {AppStateType, store} from './Components/redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Provider} from "react-redux";





ReactDOM.render(
    <Provider store={store}><App /*state={state} dispatch={store.dispatch.bind(store)} store={store}*//>
    </Provider>,

    document.getElementById('root')
);

/*renderEntireTree(store.getState())

store.subscribe(() => {
    renderEntireTree(store.getState())
});*/

