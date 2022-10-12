import {ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type AddPostType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextActionCreator>

export type profileReducerActionType = AddPostType | UpdateNewPostTextType

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 25},
        {id: 3, message: 'Hello', likesCount: 5},
        {id: 4, message: 'My name is...', likesCount: 2},
    ],
    newPostText: 'new text'
}

export const profileReducer = (state = initialState, action: profileReducerActionType): ProfilePageType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (text: string | undefined) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)