import { MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../redux/state';

export type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPost: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPost={props.updateNewPost}/>
        </div>
    )
}