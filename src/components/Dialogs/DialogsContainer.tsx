import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


// type DialogsContainerType = {
//     store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
// }

// export const DialogsContainer = (props: DialogsContainerType) => {
//
//     let state = props.store.getState().dialogsPage;
//
//     let addMessage = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (body: any) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     }
//
//     return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={addMessage} dialogsPage={state}/>
// }

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        sendMessage: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);