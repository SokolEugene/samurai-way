import s from './Post.module.css'
import avatar from '../../../../images/avatar.png'
import {PostDataPropsType} from '../../../../index';

type PostPropsType = {
    message: string
    likeCounts: number
    id: string
}

export const Post = (props: PostPropsType) => {

    return <div className={s.item}>
        <img src={avatar} alt="avatar"/>
        <a>{props.message}</a>
        <div><span>likes </span>{props.likeCounts}</div>
    </div>
}