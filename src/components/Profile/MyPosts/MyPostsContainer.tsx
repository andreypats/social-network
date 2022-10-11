import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

// type MyPostsType = {
//     store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
// }

// export const MyPostsContainer = (props: MyPostsType) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     let onPostChange = (text: string | undefined) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }
//
//     return (<MyPosts
//         updateNewPostText = {onPostChange}
//         addPost = {addPost}
//         posts={state.profilePage.posts}
//         newPostText={state.profilePage.newPostText}
//     />)
// }

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string | undefined) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);