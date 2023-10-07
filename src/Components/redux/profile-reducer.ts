import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";

export type ProfilePageType = {
    postData: PostDataPropsType[]
    newPostText: string
}
export type PostDataPropsType = {
    id: string
    message: string
    likeCounts: number
}
export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type InitialStateType = {postData: PostDataPropsType[]
    newPostText: string}
const initialState: InitialStateType = {
        postData: [
            {id: v1().slice(0, 8), message: 'It\'s my first post', likeCounts: 27},
            {id: v1().slice(0, 8), message: 'how are you?', likeCounts: 69},
        ],
        newPostText: ''
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1().slice(0, 8), message: state.newPostText, likeCounts: 0}
            return {
                ...state, postData: [...state.postData, newPost], newPostText:''
            };
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state, newPostText: action.newText
            }
        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    }
};
export const updateNewPostTextAC = (text: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }
};