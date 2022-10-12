import {DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>

export type DialogsReducerActionType = SendMessageType | UpdateNewMessageBodyType

let initialState: DialogsPageType = {
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

export const dialogsReducer = (state = initialState, action: DialogsReducerActionType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            };               
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)