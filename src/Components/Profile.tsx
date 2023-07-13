import bgImg from '../images/bg-img.jpg'

export const Profile = () => {
    return (<div className="content">
            <div><img src={bgImg}/></div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
                <div>New Post</div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                    <div>Post 3</div>
                </div>
            </div>

        </div>
    )
}