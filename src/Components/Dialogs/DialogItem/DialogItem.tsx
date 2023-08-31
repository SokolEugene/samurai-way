import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


export type DialogItemPropsType = {
   name: string
   id: string
}
export const DialogItem = (props: DialogItemPropsType) => {
   return <div className={s.dialogsItems}>
      <nav className={s.item}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></nav>
   </div>
}
