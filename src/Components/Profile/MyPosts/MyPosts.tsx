
import s from './MyPosts.module.css'
import {Post} from './Post/Post';



export const MyPosts = () => {
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
                    <Post message = {'how are you?'} likeCounts={27}/>
                    <Post message = {"It's my first post"} likeCounts={69}/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}