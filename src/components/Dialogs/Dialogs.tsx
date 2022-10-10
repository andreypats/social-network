import React, {ChangeEvent} from "react";
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogsNameType = {
    id: number
    name: string
}

const DialogsName = (props: DialogsNameType) => {
    const path = '/dialogs/' + props.id

    return (
        <div className={s.name}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type DialogsMessageType = {
    id: number
    message: string
}

const DialogsMessage = (props: DialogsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

type DialogsType = {
    updateNewMessageBody: any
    sendMessage: any
    dialogsPage: any
}

export const Dialogs = (props: DialogsType) => {

    let state = props.dialogsPage;
    // let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map((d: any) => <DialogsName name={d.name} id={d.id}/>)
    let MessageElements = state.messages.map((m: any) => <DialogsMessage message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;


    let addMessage = () => {
        props.sendMessage()
        // props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
        //props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div>{dialogsElements}</div>
                <div>
                    {MessageElements}
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}