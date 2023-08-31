import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {v1} from 'uuid';
import {MessageDataPropsType, DialogDataPropsType} from '../../index';

export type DialogPropsType = {
    dialogsData: DialogDataPropsType[]
    messagesData:MessageDataPropsType[]
}



export const Dialogs = (props:DialogPropsType ) => {
  /*  let dialogsData = [
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
    ]*/
    let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.messagesData.map(el => <Message message={el.message} id={el.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messagesElements}> {messagesElements} </div>
        </div>
    )
}