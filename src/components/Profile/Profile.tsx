import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./MyPosts/Post/Post";

export const Profile = (props: any) => {

    let postsElements = props.profilePage.posts.map ((p: any) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts postsElements={postsElements}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}