import {v1} from 'uuid';


export type StoreType = {
    _state: RootStateType
    getState: ()=> RootStateType
    _callSubscriber: (state:RootStateType) => void
    addPost: () => void
    updateNewPost: (newText: string) => void
    addMessage: () => void
    updateNewMessage: (newText: string) => void
    subscribe: (observer:(state: RootStateType) => void) => void
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
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state')},

    addPost() {
        let newPost = {id: v1().slice(0, 8), message: this._state.profilePage.newPostText, likeCounts: 0}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPost(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage()  {
        let newMessage = {id: v1().slice(0, 8), message: this._state.dialogsPage.newMessageText}
        this._state.dialogsPage.messagesData.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessage(newText)  {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer)  {
        this._callSubscriber = observer
    }
}