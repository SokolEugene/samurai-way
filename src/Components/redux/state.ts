import {v1} from 'uuid';
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {navbarReducer} from "./navbar-reducer";


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


export const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1().slice(0, 8), message: 'It\'s my first post', likeCounts: 27},
                {id: v1().slice(0, 8), message: 'how are you?', likeCounts: 69},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                {id: v1().slice(0, 8), message: 'hi'},
                {id: v1().slice(0, 8), message: 'hey'},
                {id: v1().slice(0, 8), message: 'hui'},
                {id: v1().slice(0, 8), message: 'pshe'},
            ],
            dialogsData: [
                {id: v1().slice(0, 8), name: 'Eugene'},
                {id: v1().slice(0, 8), name: 'Vlada'},
                {id: v1().slice(0, 8), name: 'Lexus'},
                {id: v1().slice(0, 8), name: 'Nick'},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('state')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsTypes) {

        this._state = profileReducer(this._state, action)
        this._state = dialogsReducer(this._state, action)
        //this._state.navbar = navbarReducer(this._state.profilePage, action)
        this._callSubscriber(this._state);
       /* if (action.type === "ADD-POST") {
            let newPost = {id: v1().slice(0, 8), message: this._state.profilePage.newPostText, likeCounts: 0}
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage = {id: v1().slice(0, 8), message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }*/
    }
}