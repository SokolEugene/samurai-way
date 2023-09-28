import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsTypes) => void

}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    postData: PostDataPropsType[]
    newPostText: string
}
export type DialogsPageType = {
    newMessageText: string
    messagesData: MessageDataPropsType[]
    dialogsData: DialogDataPropsType[]
}
export type PostDataPropsType = {
    id: string
    message: string
    likeCounts: number
}
export type DialogDataPropsType = {
    id: string
    name: string
}
export type MessageDataPropsType = {
    id: string
    message: string
}

export type ActionsTypes =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostActionType
    | UpdateNewMessageActionType
export type AddPostActionType = {
    type: "ADD-POST"
}
//export type AddPostActionType = ReturnType<typeof addPostAC> // автоматическая типизация
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
});
export const store:StoreType = createStore(reducers);