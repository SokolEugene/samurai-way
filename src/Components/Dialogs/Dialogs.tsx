import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {RootStateType} from '../redux/state';

export type DialogPropsType = {
    state: RootStateType
}



export const Dialogs = (props:DialogPropsType ) => {

    let dialogsElements = props.state.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElements = props.state.dialogsPage.messagesData.map(el => <Message message={el.message} id={el.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messagesElements}> {messagesElements} </div>
        </div>
    )
}