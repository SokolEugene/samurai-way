import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {RootStateType} from '../../redux/state';
import React, {useRef} from 'react';

export type MyPostPropsType = {
    state: RootStateType
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostPropsType) => {
    let newPostEl = useRef<HTMLTextAreaElement>(null)

    let onClickHandler = () => {
        if (newPostEl.current !== null) {
            let text = newPostEl.current.value;
            props.addPost(text);
            newPostEl.current.value = '';
        }
    }

    let myPostElements = props.state.profilePage.postData.map(el => <Post message={el.message}
                                                                          likeCounts={el.likeCounts} id={el.id}/>)
    return (
        <div className={s.postsBlock}>
            <p>My Posts</p>
            <div>
                <textarea ref={newPostEl}></textarea>
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