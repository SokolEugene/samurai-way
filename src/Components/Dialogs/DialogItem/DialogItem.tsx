import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogPropsType} from '../Dialogs'

export const DialogItem = (props: DialogPropsType) => {
   return <div className={s.dialogsItems}>
      <nav className={s.item}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></nav>
   </div>
}
