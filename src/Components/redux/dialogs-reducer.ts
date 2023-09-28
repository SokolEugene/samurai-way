import {ActionsTypes, AddMessageActionType, DialogsPageType, UpdateNewMessageActionType} from "./redux-store";
import {v1} from "uuid";

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: v1().slice(0, 8), message: state.newMessageText}
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state;
        default:
            return state
    }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageActionType =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text})
export const addMessageAC = (): AddMessageActionType => ({type: "ADD-MESSAGE"})