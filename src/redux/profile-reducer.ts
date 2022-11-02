import {ProfilePageType} from "./store";
import {ProfilePropsType} from "../components/Profile/ProfileContainer";
import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

export type profileReducerActionType = AddPostType | UpdateNewPostTextType | SetUserProfileType

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 25},
        {id: 3, message: 'Hello', likesCount: 5},
        {id: 4, message: 'My name is...', likesCount: 2},
    ],
    newPostText: 'new text',
    profile: null
}

export const profileReducer = (state = initialState, action: profileReducerActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string | undefined) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)
export const setUserProfile = (profile: ProfilePropsType) => ({type: SET_USER_PROFILE, profile} as const)
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch (setUserProfile(response.data))
        });
}