import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id?: number
    message: string | undefined
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string | undefined
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

export let store: StoreType = {
    // _state - свойство, к которому нельзя обращаться напрямую
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 25},
                {id: 3, message: 'Hello', likesCount: 5},
                {id: 4, message: 'My name is...', likesCount: 2},
            ],
            newPostText: 'new text'
        },
        dialogsPage: {
            dialogs: [{id: 1, name: 'Andrey'},
                {id: 2, name: 'Stanislav'},
                {id: 3, name: 'Maksim'},
                {id: 4, name: 'Artem'}],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you'},
                {id: 4, message: 'What is your name?'},
            ],
            newMessageBody: ''
        }
    },
    // метод
    _callSubscriber() {
        console.log('State changed')
    },

    // метод
    getState() {
        return this._state;
    },
    // метод
    subscribe(observer) {
        this._callSubscriber = observer   //observer - паттерн
    },

    dispatch(action) {      //action - какой-то объект(действие), у которого есть свойство type
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


declare global {
    interface Window {
        store: StoreType;
    }
}
window.store = store;

