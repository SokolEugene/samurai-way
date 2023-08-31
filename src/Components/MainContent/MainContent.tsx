import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';
import {Dialogs} from '../Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from '../News/News';
import {Music} from '../Music/Music';
import {Settings} from '../Settings/Settings';

import {DialogDataPropsType, MessageDataPropsType, PostDataPropsType} from '../../index';

export type MainContentPropsType = {
    postData: PostDataPropsType[]
    dialogsData: DialogDataPropsType[]
    messagesData:MessageDataPropsType[]
}

export const MainContent = (props: MainContentPropsType) => {

    return (
        <BrowserRouter>
            <div className={s.mainContent}>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile postData={props.postData}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                        <Route path={'/news'} Component={News}/>
                        <Route path={'/music'} Component={Music}/>
                        <Route path={'/settings'} Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}