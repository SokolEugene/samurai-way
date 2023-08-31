import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostDataPropsType} from '../../../index';

export type MyPostPropsType = {
    postData: PostDataPropsType[]
}

export const MyPosts = (props:MyPostPropsType) => {


    let myPostElements = props.postData.map(el => <Post message={el.message} likeCounts={el.likeCounts} id={el.id}/> )
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