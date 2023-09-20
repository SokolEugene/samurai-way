import {v1} from 'uuid';


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsTypes) => void
    /*addPost: () => void
    updateNewPost: (newText: string) => void
    addMessage: () => void
    updateNewMessage: (newText: string) => void*/
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

export type ActionsTypes = AddPostActionType | AddMessageActionType | UpdateNewPostActionType | UpdateNewMessageActionType
type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type UpdateNewMessageActionType = {
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
    dispatch(action) {
        if (action.type === "ADD-POST") {
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
        }
    }

    /*addPost() {
        let newPost = {id: v1().slice(0, 8), message: this._state.profilePage.newPostText, likeCounts: 0}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },*/
    /*updateNewPost(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },*/
    /*addMessage()  {
        let newMessage = {id: v1().slice(0, 8), message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },*/
    /*updateNewMessage(newText)  {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },*/

}