import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Footer} from "./Components/Footer/Footer";
import {MainContent, MainContentPropsType} from './Components/MainContent/MainContent';
import {DialogDataPropsType, MessageDataPropsType, PostDataPropsType} from './index';

export type AppPropsType = {
    postData: PostDataPropsType[]
    dialogsData: DialogDataPropsType[]
    messagesData:MessageDataPropsType[]
}

export const App =(props:AppPropsType) => {

    return (
            <div className={"contentWrapper"}>
                <Header/>
                <MainContent postData={props.postData} messagesData={props.messagesData} dialogsData={props.dialogsData}/>
                <Footer/>
            </div>


    );
}



