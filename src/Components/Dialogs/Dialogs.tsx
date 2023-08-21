import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {v1} from 'uuid';

type DialogPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    text: string
    id: string
}
const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}
                     className={({isActive}) => (isActive ? s.active : s.dialog)}>{props.name}</NavLink></div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export const Dialogs = () => {
    let dialogsData = [
        {id: v1().slice(0, 8), name: 'Eugene'},
        {id: v1().slice(0, 8), name: 'Vlada'},
        {id: v1().slice(0, 8), name: 'Lexus'},
        {id: v1().slice(0, 8), name: 'Nick'},
    ]
    let messagesData = [
        {id: v1().slice(0, 8), message: 'hi'},
        {id: v1().slice(0, 8), message: 'hey'},
        {id: v1().slice(0, 8), message: 'hui'},
        {id: v1().slice(0, 8), message: 'pshe'},
    ]
    let dialogsElements = dialogsData.map(el => <Dialog name={el.name} id={el.id}/>);
    let messagesElements = messagesData.map(el => <Message text={el.message} id={el.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}> {dialogsElements} </div>
            <div className={s.messages}> {messagesElements} </div>
        </div>
    )
}