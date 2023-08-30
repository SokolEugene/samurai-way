import React from 'react';
import s from '../Dialogs.module.css'
import {MessagePropsType} from '../Dialogs'

// @ts-ignore
export const Message = (props: MessagePropsType) => {
    return <div className={s.dialog}>{props.text}</div>
    }

