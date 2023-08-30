import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";

import {Footer} from "./Components/Footer/Footer";
import {MainContent, MainContentPropsType} from './Components/MainContent/MainContent';
import {BrowserRouter, Route} from 'react-router-dom';
import {v1} from 'uuid';
import {IndexPropsType} from './index';

export type AppPropsType = {
    postData: IndexPropsType[]
}


const App =(props: AppPropsType) => {

    return (

            <div className={"contentWrapper"}>
                <Header/>
                <MainContent postData={props.postData}/>
                <Footer/>
            </div>


    );
}

export default App;
