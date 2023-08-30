import { MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {v1} from 'uuid';
import {MainContentPropsType} from '../MainContent/MainContent';
import {AppPropsType} from '../../App';
import {IndexPropsType} from '../../index';

export type ProfilePropsType = {
    postData: IndexPropsType[]
}

export const Profile = (props: ProfilePropsType) => {


    return (
        <div className={"profileContent"}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}