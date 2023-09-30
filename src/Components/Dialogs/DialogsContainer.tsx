import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";


export type DialogPropsType = {
    //store: StoreType
}
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch ): MapDispatchToPropsType => {
    return {
        addMessage: () => {dispatch(addMessageAC())},
        updateNewMessageText: (text: string) => {dispatch(updateNewMessageTextAC(text))}
    }
}

export const DialogsContainer: any = connect (mapStateToProps, mapDispatchToProps) (Dialogs);
/*export const DialogsContainer = (props: DialogPropsType) => {

    let state = props.store.getState();
    let onClickHandler = () => {
        props.store.dispatch(addMessageAC());
    }
    let onMessageChange = (text: string) => {
            props.store.dispatch(updateNewMessageTextAC(text))
    }

    return <Dialogs dialogsPage={state.dialogsPage} addMessage={onClickHandler} updateNewMessageText={onMessageChange}/>
}*/