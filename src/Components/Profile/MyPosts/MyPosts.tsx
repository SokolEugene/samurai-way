import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, ProfilePageType} from '../../redux/redux-store';
import React, {useRef} from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";

export type MyPostPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

/*let addPostAC = ():AddPostActionType => {
 return {
     type: "ADD-POST"
 }
}

let updateNewPostTextAC = (text: string):UpdateNewPostActionType => {
   return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }
}*/


export const MyPosts = (props: MyPostPropsType) => {
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    let onClickHandler = () => {
            props.dispatch(addPostAC() );
        }

    let onPostChange = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value;
            //let action = updateNewPostTextAC(text)
            props.dispatch(updateNewPostTextAC(text))
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