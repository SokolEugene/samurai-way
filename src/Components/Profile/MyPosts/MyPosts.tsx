
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Post message = {'how are you?'} likeCounts={27}/>
                    <Post message = {"It's my first post"} likeCounts={69}/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}