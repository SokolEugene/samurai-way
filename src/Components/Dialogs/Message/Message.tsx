import React from 'react';
import s from '../Dialogs.module.css'
import {MessageDataPropsType} from '../../../index';


export type MessageItemPropsType = {
    message: string
    id: string
}
export const Message = (props: MessageItemPropsType) => {
    return <div className={s.dialog}>{props.message}</div>
    }

