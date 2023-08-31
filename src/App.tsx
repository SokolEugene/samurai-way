import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {MainContent} from './Components/MainContent/MainContent';

import {RootStateType} from './Components/redux/state';

export type AppType = {
    state: RootStateType
}
export const App =(props:AppType) => {

    /*return (
            <div className={"contentWrapper"}>
                <Header/>
                <MainContent postData={state.profilePage.postData} messagesData={state.dialogsPage.messagesData} dialogsData={state.dialogsPage.dialogsData}/>
                <Footer/>
            </div>
    );
}*/
    return (
        <div className={"contentWrapper"}>
            <Header/>
            <MainContent state={props.state}/>
            <Footer/>
        </div>
    );
}



