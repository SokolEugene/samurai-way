import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Footer} from './Components/Footer/Footer';
import {MainContent} from './Components/MainContent/MainContent';
import {RootStateType} from './Components/redux/state';
import {BrowserRouter} from 'react-router-dom';

export type AppType = {
    state: RootStateType
    addPost: () => void
    addMessage: () => void
    updateNewPost: (newText: string) => void
    updateNewMessage: (newText: string) => void
}


export const App = (props: AppType) => {

    return (
        <BrowserRouter>
            <div className={'contentWrapper'}>
                <Header/>
                <MainContent state={props.state}
                             addPost={props.addPost}
                             updateNewPost={props.updateNewPost}
                             addMessage={props.addMessage}
                             updateNewMessage={props.updateNewMessage}
                             /*dialogsPage={props.state.dialogsPage}*//>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}



