import React from "react";
import s from './../Dialog.module.css'

export const DialogsMessages = (props: any) => {

    return (
        <div className={s.dialogsMessage}>
            {props.MessageElements}
        </div>
    )
}