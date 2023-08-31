import { MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {RootStateType} from '../redux/state';

export type ProfilePropsType = {
    state: RootStateType
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    )
}