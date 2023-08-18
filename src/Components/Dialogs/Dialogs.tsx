import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    text: string
}
const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+props.id}
                     className={({isActive}) => (isActive ? s.active : s.dialog)}>{props.name}</NavLink></div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name={'Eugene'} id={1}/>
                <Dialog name={'Vlada'} id={2}/>
                <Dialog name={'Lexus'} id={3}/>
                <Dialog name={'Nick'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message text={"hi"}/>
                <Message text={"hey"}/>
                <Message text={"hui"}/>
                <Message text={"pshe"}/>
            </div>
        </div>
    )
}