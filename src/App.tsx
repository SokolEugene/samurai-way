import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {MainContent} from './Components/MainContent/MainContent';
import {BrowserRouter} from 'react-router-dom';

/*export type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}*/

export const App = () => {
    return (
        <BrowserRouter>
            <div className={'contentWrapper'}>
                <Header/>
                <MainContent />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}



