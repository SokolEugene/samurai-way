import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';
import {Dialogs} from '../Dialogs/Dialogs';

export const MainContent = () => {

    return (
        <div className={s.mainContent}>
            <Navbar/>
            <div className={s.content}> {/*<Profile/>*/}
                <Dialogs/>
            </div>


        </div>
    )
}