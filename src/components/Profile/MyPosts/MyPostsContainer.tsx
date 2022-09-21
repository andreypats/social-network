import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/store";


type MyPostsType = {
    store: StoreType
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