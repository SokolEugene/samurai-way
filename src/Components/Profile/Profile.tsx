import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
// store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    debugger

    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}