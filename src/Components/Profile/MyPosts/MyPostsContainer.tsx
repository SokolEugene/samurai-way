import {ActionsTypes, ProfilePageType, StoreType} from '../../redux/redux-store';
import React, {useRef} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export type MyPostPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostPropsType) => {
    let state = props.store.getState();
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    let onClickHandler = () => {
           props.store.dispatch(addPostAC() );
        }

    let onPostChange = (text:string) => {

            // let text = newPostEl.current.value;
            let action = updateNewPostTextAC(text)
           props.store.dispatch(action)
           //props.store.dispatch(updateNewPostTextAC(text))

    }
    return <MyPosts updateNewPostText={onPostChange} addPost={onClickHandler} profilePage={state.profilePage}/>
}