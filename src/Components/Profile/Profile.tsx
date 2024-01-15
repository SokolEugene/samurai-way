import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../redux/profile-reducer";
import {Preloader} from "../Preloader/Preloader";

type ProfilePropsType = {
    profile: ProfileUserType
}
export const Profile = (props: ProfilePropsType )=> {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={"profileContent"}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}