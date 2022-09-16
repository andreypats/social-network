import React from "react";
import s from './../Dialog.module.css'

export const DialogsItem = (props: any) => {

    return (
        <div className={s.dialogsItem}>
            {props.dialogsElements}
        </div>
    )
}