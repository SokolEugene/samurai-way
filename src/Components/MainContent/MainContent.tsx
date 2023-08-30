import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';
import {Dialogs} from '../Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {News} from '../News/News';
import {Music} from '../Music/Music';
import {Settings} from '../Settings/Settings';
import {v1} from 'uuid';
import {AppPropsType} from '../../App';
import {IndexPropsType} from '../../index';

export type MainContentPropsType = {
    postData: IndexPropsType[]
}

export const MainContent = (props: MainContentPropsType) => {

    return (
        <BrowserRouter>
            <div className={s.mainContent}>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        {/* <Route path={'/profile'} Component={Profile}/>
                        <Route path={'/dialogs/*'} Component={Dialogs}/>
                        <Route path={'/news'} Component={News}/>
                        <Route path={'/music'} Component={Music}/>
                        <Route path={'/settings'} Component={Settings}/>*/}
                        <Route path={'/profile'} element={<Profile postData={props.postData}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs /*dialogs={dialogs} messages={messages}*//>}/>
                        <Route path={'/news'} Component={News}/>
                        <Route path={'/music'} Component={Music}/>
                        <Route path={'/settings'} Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}