import {StoreType} from '../../redux/redux-store';
import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export type MyPostPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostPropsType) => {
    let state = props.store.getState();
    let onClickHandler = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }
    return <MyPosts updateNewPostText={onPostChange} addPost={onClickHandler} profilePage={state.profilePage}/>
}