import React from "react";
import {DialogsReducerActionType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {DialogsPageType, ProfilePageType} from "../../redux/store";
import {EmptyObject, Store} from "redux";
import {profileReducerActionType} from "../../redux/profile-reducer";
import {Dialogs} from "./Dialogs";


type DialogsContainerType = {
    store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
}

export const DialogsContainer = (props: DialogsContainerType) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={addMessage} dialogsPage={state}/>
}