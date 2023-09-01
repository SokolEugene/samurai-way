import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';
import {Dialogs} from '../Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import {News} from '../News/News';
import {Music} from '../Music/Music';
import {Settings} from '../Settings/Settings';
import {RootStateType} from '../redux/state';

export type MainContentPropsType = {
    state: RootStateType
    addPost:(postMessage: string)=>void
}

export const MainContent = (props: MainContentPropsType) => {
    return (

                <div className={s.mainContent}>
                    <Navbar/>
                    <div className={s.content}>
                        <Routes>
                            <Route path={'/profile'} element={<Profile state={props.state} addPost={props.addPost}/>}/>
                            <Route path="/dialogs/*" element={<Dialogs state={props.state}/>}/>
                            <Route path={'/news'} Component={News}/>
                            <Route path={'/music'} Component={Music}/>
                            <Route path={'/settings'} Component={Settings}/>
                        </Routes>
                    </div>
                </div>

        )
    /*return (
        <BrowserRouter>
            <div className={s.mainContent}>
                <Navbar/>
                <div className={s.content}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile postData={props.postData}/>}/>
                        <Route path="/dialogs/!*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                        <Route path={'/news'} Component={News}/>
                        <Route path={'/music'} Component={Music}/>
                        <Route path={'/settings'} Component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )*/
}