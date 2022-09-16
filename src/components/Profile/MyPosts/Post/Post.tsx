import React from "react";
import s from './Post.module.css'

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img
                src="https://paperwriter.ca/wp-content/uploads/2022/07/Max-Verstappen-needs-more-control-to-return-to-Netflix-Drive-1536x1024.jpg"
                alt=""/>
            {props.message}
            <div>like {props.likesCount}</div>
        </div>
    )
}