import React from "react";
import {
    addPostActionCreator,
    profileReducerActionType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {DialogsPageType, ProfilePageType} from "../../../redux/store";
import {EmptyObject, Store} from "redux";
import {DialogsReducerActionType} from "../../../redux/dialogs-reducer";


type MyPostsType = {
    store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
}

export const MyPostsContainer = (props: MyPostsType) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string | undefined) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts
        updateNewPostText = {onPostChange}
        addPost = {addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />)
}