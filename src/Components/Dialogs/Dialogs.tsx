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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].message} id={messagesData[0].id}/>
                <Message text={messagesData[1].message} id={messagesData[1].id}/>
                <Message text={messagesData[2].message} id={messagesData[2].id}/>
                <Message text={messagesData[3].message} id={messagesData[3].id}/>

            </div>
        </div>
    )
}