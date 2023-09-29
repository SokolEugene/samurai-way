import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, ProfilePageType, UpdateNewPostActionType} from "./redux-store";

const initialState: ProfilePageType = {
        postData: [
            {id: v1().slice(0, 8), message: 'It\'s my first post', likeCounts: 27},
            {id: v1().slice(0, 8), message: 'how are you?', likeCounts: 69},
        ],
        newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1().slice(0, 8), message: state.newPostText, likeCounts: 0}
            state.postData.push(newPost)
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state;
        default:
            return state
    }
}
export const addPostAC = ():AddPostActionType => {
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