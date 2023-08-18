import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

export const Profile = () => {
    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}