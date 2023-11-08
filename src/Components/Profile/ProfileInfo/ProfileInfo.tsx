import s from './ProfileInfo.module.css';
import bgImg from '../../../images/bg-img.jpg';
import {Preloader} from "../../Preloader/Preloader";
import {ProfileUserType} from "../../redux/profile-reducer";
import avatar from "../../../images/avatar.png";

type ProfileInfoPropsType = {
    profile: ProfileUserType
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={s.profileInfo}>
           {/* <div className={s.bgImg}>*/}
            <img src={bgImg} alt={'bgimg'}/>

            <div className={s.description}>
                <img src={props.profile.photos.small !== null ? props.profile.photos.small : avatar} alt={'bgimg'}/>

                    <h2>{props.profile.fullName}</h2>
                    <p>About Me: {props.profile.aboutMe}</p>
                    <p>Looking for a Job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</p>
                    {props.profile.lookingForAJob && (
                        <p>Job Description: {props.profile.lookingForAJobDescription}</p>
                    )}
                    <h3>Contacts:</h3>
                <ul>
                    {Object.entries(props.profile.contacts).map(([key, value]) => {
                        if (value) {
                            return (
                                <li key={key}>
                                    <a href={value} target="_blank" rel="noopener noreferrer">
                                        {key}
                                    </a>
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
                </div>
            </div>
    )
}