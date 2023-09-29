import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem'
import {Message} from './Message/Message'
import {ActionsTypes, DialogsPageType} from '../redux/redux-store';
import {addMessageAC, updateNewMessageTextAC} from "../redux/dialogs-reducer";

export type DialogPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (text:string) => void
}


export const Dialogs = (props: DialogPropsType) => {
    let newMessageEl = useRef<HTMLTextAreaElement>(null)
    let onClickHandler = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        if (newMessageEl.current !== null) {
            let text = newMessageEl.current.value;
            props.updateNewMessageText(text)
        }
    }

    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem
        name={el.name}
        id={el.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(el =>
        <Message message={el.message} id={el.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}> {dialogsElements} </div>
            <div className={s.messagesElements}>
                <div>{messagesElements}</div>
                <div>
                <textarea onChange={onMessageChange}
                          ref={newMessageEl}
                          value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={onClickHandler}>Send message</button>
                </div>
            </div>
        </div>
    )
}