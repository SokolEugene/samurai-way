
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {v1} from 'uuid';

export type MyPostPropsType = {
    id?: string
    message: string
    likeCounts: number
}

export const MyPosts = () => {
    let postData: MyPostPropsType[] = [
        {id: v1().slice(0, 8), message:"It's my first post", likeCounts:27},
        {id: v1().slice(0, 8), message:"how are you?", likeCounts: 69},
    ]
    let myPostElements = postData.map(el => <Post message={el.message} likeCounts={el.likeCounts} id={el.id}/> )
    return (
            <div className={s.postsBlock}>
                <p>My Posts</p>
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>

                    {myPostElements}
                </div>
            </div>
    )
}