
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {v1} from 'uuid';

/*type PostType = {
    id?: string
    message: string
    likeCounts: number
}*/

export const MyPosts = (/*props: PostType*/) => {
    let postData = [
        {id: v1().slice(0, 8), message:"It's my first post", likeCounts:27},
        {id: v1().slice(0, 8), message:"how are you?", likeCounts: 69},
    ]
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
                    <Post message={postData[0].message} likeCounts={postData[0].likeCounts}/*{ id={postData[0].id}}*//>
                    <Post message={postData[1].message} likeCounts={postData[1].likeCounts}/*{ id={postData[1].id}}*//>

                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}