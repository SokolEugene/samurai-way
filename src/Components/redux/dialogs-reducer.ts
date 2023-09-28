import {ActionsTypes, AddMessageActionType, RootStateType, UpdateNewMessageActionType} from "./state";
import {v1} from "uuid";

export const dialogsReducer = (state: RootStateType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = {id: v1().slice(0, 8), message: state.dialogsPage.newMessageText}
            state.dialogsPage.messagesData.push(newMessage)
            state.dialogsPage.newMessageText = ''
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.dialogsPage.newMessageText = action.newText
            return state;
        default:
            return state
    }
}

export const updateNewMessageTextAC = (text: string): UpdateNewMessageActionType =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text})
export const addMessageAC = (): AddMessageActionType => ({type: "ADD-MESSAGE"})