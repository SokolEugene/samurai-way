import React from 'react';
import './App.css';
import {Footer} from './Components/Footer/Footer';
import {MainContent} from './Components/MainContent/MainContent';
import {BrowserRouter} from 'react-router-dom';
import HeaderContainer from "./Components/Header/HeaderContainer";

/*export type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}*/

export const App = () => {
    return (
        <BrowserRouter>
            <div className={'contentWrapper'}>
                <HeaderContainer/>
                <MainContent />
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


