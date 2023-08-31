import { MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import { PostDataPropsType} from '../../index';

export type ProfilePropsType = {
    postData: PostDataPropsType[]
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}