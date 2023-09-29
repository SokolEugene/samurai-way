import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../redux/redux-store';
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
store: StoreType
}

export const Profile = (props: ProfilePropsType) => {
    debugger

    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}