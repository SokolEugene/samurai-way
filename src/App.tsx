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
    /*addPost: () => void
    addMessage: () => void
    updateNewPost: (newText: string) => void
    updateNewMessage: (newText: string) => void*/
}


export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className={'contentWrapper'}>
                <Header/>
                <MainContent state={props.state}
                             dispatch={props.dispatch}
                             /*addPost={props.addPost}
                             updateNewPost={props.updateNewPost}
                             addMessage={props.addMessage}
                             updateNewMessage={props.updateNewMessage}*/
                             /*dialogsPage={props.state.dialogsPage}*//>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}



