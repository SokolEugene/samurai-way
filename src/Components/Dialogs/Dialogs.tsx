import React from 'react';
import s from './Dialogs.module.css'

export const Dialogs = () => {

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>Eugene</div>
                <div className={s.dialog + ' ' + s.active}>Vlada</div>
                <div className={s.dialog}>Lexus</div>
                <div className={s.dialog}>Nic</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>hey</div>
                <div className={s.message}>hui</div>
                <div className={s.message}>pshe</div>
            </div>
        </div>
    )
}