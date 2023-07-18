import s from './Post.module.css'
import avatar from '../../../../images/avatar.png'

export const Post = () => {
    return <div className={s.item}>
        <img src={avatar} alt="avatar"/>
        <a>Post 1</a>
        <div><span>likes</span></div>
    </div>
}