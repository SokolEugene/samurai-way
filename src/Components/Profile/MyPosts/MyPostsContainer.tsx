import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: ProfilePageType
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (text:string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType):MapStatePropsType  => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string)=> {dispatch(updateNewPostTextAC(text))}
    }
}

export const MyPostsContainer: any = connect (mapStateToProps, mapDispatchToProps) (MyPosts);


/*
export const MyPostsContainer = (props: MyPostPropsType) => {
    let state = props.store.getState();
    let onClickHandler = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }
    return <MyPosts updateNewPostText={onPostChange} addPost={onClickHandler} profilePage={state.profilePage}/>
}*/
