import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {store} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer store={store}/>
        </div>
    )
}

//31:00