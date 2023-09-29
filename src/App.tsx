import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {MainContent} from './Components/MainContent/MainContent';
import {ActionsTypes, RootStateType, StoreType} from './Components/redux/redux-store';
import {BrowserRouter} from 'react-router-dom';

export type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}


export const App = (props: AppType) => {
    debugger
    return (
        <BrowserRouter>
            <div className={'contentWrapper'}>
                <Header/>
                <MainContent state={props.state}
                             dispatch={props.dispatch}
                             store={props.store}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}



