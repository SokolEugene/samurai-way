import {ActionsTypes} from "./redux-store";
import {v1} from "uuid";

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type DialogsPageType = {
    newMessageText: string
    messagesData: MessageDataPropsType[]
    dialogsData: DialogDataPropsType[]
}
export type DialogDataPropsType = {
    id: string
    name: string
}
export type MessageDataPropsType = {
    id: string
    message: string
}
export type UpdateNewMessageActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}

type InitialStateType = {
    newMessageText: string
    messagesData: MessageDataPropsType[]
    dialogsData: DialogDataPropsType[]
}
const initialState: InitialStateType =  {
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

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: v1().slice(0, 8), message: state.newMessageText}
            return {
                ...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''
            };
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return {
                ...state, newMessageText: action.newText
            };
        default:
            return state
    }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageActionType =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text})
export const addMessageAC = (): AddMessageActionType => ({type: "ADD-MESSAGE"})