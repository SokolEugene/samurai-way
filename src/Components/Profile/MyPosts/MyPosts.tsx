import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import React, {useRef} from 'react';
import {MyPostsPropsType} from "./MyPostsContainer";



export const MyPosts = (props: MyPostsPropsType) => {

    let newPostEl = useRef<HTMLTextAreaElement>(null)

    let onClickHandler = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value;
            props.updateNewPostText(text)
        }
    }

    let myPostElements = props.profilePage.postData.map(el =>
        <Post message={el.message}
              likeCounts={el.likeCounts}
              id={el.id}
        key={el.id}/>)
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