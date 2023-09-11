import {v1} from 'uuid';
/*import {renderEntireTree} from '../../render';*/
let renderEntireTree = (state:RootStateType) => {
    console.log('state')
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

export let state: RootStateType = {
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
}

export const addPost = () => {
    let newPost = {id: v1().slice(0, 8), message: state.profilePage.newPostText, likeCounts: 0}
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export const updateNewPost = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const addMessage = () => {
let newMessage = {id: v1().slice(0, 8), message: state.dialogsPage.newMessageText}
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderEntireTree(state)
}
export const updateNewMessage = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    renderEntireTree(state)
}

export const subscribe = (observer:(state: RootStateType) => void) => {
    renderEntireTree = observer
}