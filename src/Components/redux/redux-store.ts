import {AddPostActionType, profileReducer, UpdateNewPostActionType} from "./profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageActionType} from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import {FollowActionType, SetUsersActionType, UnfollowActionType, usersReducer} from "./users-reducer";


export type ActionsTypes =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostActionType
    | UpdateNewMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType

// export type AddPostActionType = ReturnType<typeof addPostAC>// автоматическая типизация
// export type UpdateNewPostActionType = ReturnType<typeof updateNewPostTextAC>// автоматическая типизация
// export type AddMessageActionType = ReturnType<typeof addMessageAC>// автоматическая типизация
// export type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageTextAC>// автоматическая типизация
// export type FollowActionType = ReturnType<typeof followAC>
// export type UnfollowActionType = ReturnType<typeof unfollowAC>
// export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});


export type AppStateType = ReturnType<typeof rootReducer> // автоматическая типизация
export const store = createStore(rootReducer);


/*export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsTypes) => void
}*/
/*export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}*/
/*
export type ProfilePageType = {
    postData: PostDataPropsType[]
    newPostText: string
}*/
/*export type DialogsPageType = {
    newMessageText: string
    messagesData: MessageDataPropsType[]
    dialogsData: DialogDataPropsType[]
}*/
/*export type PostDataPropsType = {
    id: string
    message: string
    likeCounts: number
}*/
/*export type DialogDataPropsType = {
    id: string
    name: string
}
export type MessageDataPropsType = {
    id: string
    message: string
}*/
/*export type AddPostActionType = {
    type: "ADD-POST"
}*/
/*export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}*/
/*export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}*/
/*export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}*/
/*
export type FollowActionType = {
    type: "FOLLOW"
    userId: string
}
export type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: string
}
export type SetUsersActionType = {
    type: "SET_USERS"
    users: UserType[]

}*/