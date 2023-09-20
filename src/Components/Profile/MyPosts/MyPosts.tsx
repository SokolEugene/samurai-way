import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, ProfilePageType} from '../../redux/state';
import React, {useRef} from 'react';

export type MyPostPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostPropsType) => {
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    let onClickHandler = () => {
            props.dispatch({type: "ADD-POST"} );
        }

    let onPostChange = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value;
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
        }
    }

    let myPostElements = props.profilePage.postData.map(el =>
        <Post message={el.message}
              likeCounts={el.likeCounts}
              id={el.id}/>)
    return (
        <div className={s.postsBlock}>
            <p>My Posts</p>
            <div>
                <textarea onChange={onPostChange} ref={newPostEl} value={props.profilePage.newPostText}/>
                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </div>
    )
}