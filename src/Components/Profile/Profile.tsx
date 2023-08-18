import bgImg from '../../images/bg-img.jpg'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.bgImg}><img src={bgImg}/></div>
            <div className={s.posts}>
                <div>
                    ava + description
                </div>
                <MyPosts/></div>
        </div>
    )
}