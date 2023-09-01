import {v1} from 'uuid';
import {renderEntireTree} from '../../render';


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
export type ProfilePageType = {
    postData: PostDataPropsType[]
}
export type DialogsPageType = {
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

export let state:RootStateType = {
    profilePage: {
        postData: [
            {id: v1().slice(0, 8), message: 'It\'s my first post', likeCounts: 27},
            {id: v1().slice(0, 8), message: 'how are you?', likeCounts: 69},
        ]
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
        ]
    }



    /*messagesData: [
        {id: v1().slice(0, 8), message: 'hi'},
        {id: v1().slice(0, 8), message: 'hey'},
        {id: v1().slice(0, 8), message: 'hui'},
        {id: v1().slice(0, 8), message: 'pshe'},
    ]*/
}

export let addPost = (postMessage: string) => {
    let newPost = {id: v1().slice(0, 8), message: postMessage, likeCounts: 27}
    state.profilePage.postData.push(newPost)
    renderEntireTree(state)
}