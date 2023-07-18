import s from './Post.module.css'
import avatar from '../../../../images/avatar.png'

type MyPostsPropsType = {
    message?: string
    likeCounts?: number
}

export const Post = (props: MyPostsPropsType) => {
    return <div className={s.item}>
        <img src={avatar} alt="avatar"/>
        <a>{props.message}</a>
        <div><span>likes </span>{props.likeCounts}</div>
    </div>
}