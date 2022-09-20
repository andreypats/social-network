import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {Post} from "./MyPosts/Post/Post";
import {PostType, ProfilePageType} from "../../redux/store";

type ProfileType = {
    dispatch: (action: any) => void
    profilePage: ProfilePageType
}

export const Profile = (props: ProfileType) => {

    let postsElements = props.profilePage.posts.map ((p: PostType) => <Post message={p.message} likesCount={p.likesCount}/>)

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