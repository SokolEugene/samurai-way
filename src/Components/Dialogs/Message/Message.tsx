import React, {useRef} from 'react';
import s from '../Dialogs.module.css'


export type MessageItemPropsType = {
    message: string
    id: string
}
export const Message = (props: MessageItemPropsType) => {

    let newMessageEl = useRef<HTMLTextAreaElement>(null)
    let onClickHandler = () => {
        if (newMessageEl.current !== null) {
            alert(newMessageEl.current.value)
        }}

        return <div className={s.dialog}>
            <div><textarea ref={newMessageEl}></textarea></div>
            <div>
                <button onClick={onClickHandler}>Send message</button>
            </div>
            {props.message}
        </div>
    }
