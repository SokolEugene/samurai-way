import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogPropsType} from '../Dialogs'

export const DialogItem = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <div className={s.item}><NavLink to={'/dialogs/' + props.id} className={({isActive}) => (isActive ? s.active : s.item)}>{props.name}</NavLink></div>
        </div>
    )
}
