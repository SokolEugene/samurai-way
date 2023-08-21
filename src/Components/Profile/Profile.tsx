import { MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export const Profile = () => {


    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}