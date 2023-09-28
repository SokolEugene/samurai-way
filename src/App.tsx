import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {MainContent} from './Components/MainContent/MainContent';
import {ActionsTypes, RootStateType} from './Components/redux/state';
import {BrowserRouter} from 'react-router-dom';

export type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void

}


export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className={'contentWrapper'}>
                <Header/>
                <MainContent state={props.state}
                             dispatch={props.dispatch}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}



