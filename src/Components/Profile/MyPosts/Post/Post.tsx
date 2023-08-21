import s from './Post.module.css'
import avatar from '../../../../images/avatar.png'
import {MyPostPropsType} from '../MyPosts'


export const Post = (props: MyPostPropsType) => {

    return <div className={s.item}>
        <img src={avatar} alt="avatar"/>
        <a>{props.message}</a>
        <div><span>likes </span>{props.likeCounts}</div>
    </div>
}