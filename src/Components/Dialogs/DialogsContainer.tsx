import React from 'react';
import {StoreType} from '../redux/redux-store';
import {addMessageAC, updateNewMessageTextAC} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export type DialogPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogPropsType) => {

    let state = props.store.getState();
    let onClickHandler = () => {
        props.store.dispatch(addMessageAC());
    }
    let onMessageChange = (text: string) => {
            props.store.dispatch(updateNewMessageTextAC(text))
    }

    return <Dialogs dialogsPage={state.dialogsPage} addMessage={onClickHandler} updateNewMessageText={onMessageChange}/>
}