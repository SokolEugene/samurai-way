import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import {News} from '../News/News';
import {Music} from '../Music/Music';
import {Settings} from '../Settings/Settings';
import {ActionsTypes, RootStateType, StoreType,} from '../redux/redux-store';
import {DialogsContainer} from "../Dialogs/DialogsContainer";

export type MainContentPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

export const MainContent = (props: MainContentPropsType) => {
    debugger

    return (

        <div className={s.mainContent}>
            <Navbar/>
            <div className={s.content}>
                <Routes>
                    <Route path={'/profile'}
                           element={<Profile store={props.store} />}/>
                    <Route path="/dialogs/*"
                           element={
                               <DialogsContainer store={props.store} />}/>
                    <Route path={'/news'} Component={News}/>
                    <Route path={'/music'} Component={Music}/>
                    <Route path={'/settings'} Component={Settings}/>
                </Routes>
            </div>
        </div>

    )
}