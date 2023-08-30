import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {v1} from 'uuid';

export type DialogPropsType = {
    name: string
    id: string
}
export type MessagePropsType = {
    text: string
    id: string
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
    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = messagesData.map(el => <Message text={el.message} id={el.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messagesElements}> {messagesElements} </div>
        </div>
    )
}