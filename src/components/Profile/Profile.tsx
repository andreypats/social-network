import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

// type ProfileType = {
//     store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
// }

export const Profile = (props: any) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}