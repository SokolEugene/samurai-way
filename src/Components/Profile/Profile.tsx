import { MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../redux/redux-store';

export type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}