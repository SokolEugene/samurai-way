import s from './Post.module.css'
import avatar from '../../../../images/avatar.png'
import {ProfilePropsType} from '../../Profile'
import {MainContentPropsType} from '../../../MainContent/MainContent';
import {AppPropsType} from '../../../../App';
import {IndexPropsType} from '../../../../index';


export const Post = (props: IndexPropsType) => {

    return <div className={s.item}>
        <img src={avatar} alt="avatar"/>
        <a>{props.message}</a>
        <div><span>likes </span>{props.likeCounts}</div>
    </div>
}