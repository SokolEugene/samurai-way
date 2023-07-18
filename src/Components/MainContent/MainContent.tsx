import React from 'react';
import s from './MainContent.module.css'
import {Navbar} from '../Navbar/Navbar';
import {Profile} from '../Profile/Profile';

export const MainContent = () => {

    return (
        <div className={s.mainContnent}>
            <Navbar/>
            <Profile/>
        </div>
    )
}