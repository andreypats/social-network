import React from "react";
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DialogsPageType, ProfilePageType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";
import {profileReducerActionType} from "../../redux/profile-reducer";
import {DialogsReducerActionType} from "../../redux/dialogs-reducer";

type ProfileType = {
    store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

//31:00