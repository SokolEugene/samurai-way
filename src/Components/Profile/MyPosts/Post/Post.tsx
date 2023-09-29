import s from './Post.module.css'
import avatar from '../../../../images/avatar.png'

type PostPropsType = {
    message: string
    likeCounts: number
    id: string
}

export const Post = (props: PostPropsType) => {
debugger
    return <div className={s.item}>
        <img src={avatar} alt="avatar"/>
        <a>{props.message}</a>
        <div><span>likes </span>{props.likeCounts}</div>
    </div>
}