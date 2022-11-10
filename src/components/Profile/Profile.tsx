import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {MapStatePropsType} from "./ProfileContainer";

export const Profile = (props: MapStatePropsType) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         isAuth={props.isAuth}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer />
        </div>
    )
}