import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileUserType} from "../redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileUserType
}
export const Profile = (props: ProfilePropsType )=> {
    return (
        <div className={"profileContent"}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}