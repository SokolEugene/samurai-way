import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';

import {Route, Routes} from 'react-router-dom';
import {News} from '../News/News';
import {Music} from '../Music/Music';
import {Settings} from '../Settings/Settings';
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersCointainer";
import {ProfileContainer} from "../Profile/ProfileContainer";

export type MainContentPropsType = {
    // state: RootStateType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

export const MainContent = () => {

    return (
        <div className={s.mainContent}>
            <Navbar/>
            <div className={s.content}>
                <Routes>
                    <Route path={'/profile/*'} element={<ProfileContainer/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/news'} Component={News}/>
                    <Route path={'/music'} Component={Music}/>
                    <Route path={'/settings'} Component={Settings}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}