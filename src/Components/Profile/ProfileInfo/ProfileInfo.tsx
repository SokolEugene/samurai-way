import s from './ProfileInfo.module.css';
import bgImg from '../../../images/bg-img.jpg';

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.bgImg}><img src={bgImg} alt={'bgimg'}/></div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    )
}