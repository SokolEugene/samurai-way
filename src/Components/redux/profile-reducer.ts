import {v1} from "uuid";
import {ActionsTypes, AddPostActionType, RootStateType, UpdateNewPostActionType} from "./state";

export const profileReducer = (state: RootStateType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: v1().slice(0, 8), message: state.profilePage.newPostText, likeCounts: 0}
            state.profilePage.postData.push(newPost)
            state.profilePage.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.profilePage.newPostText = action.newText
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