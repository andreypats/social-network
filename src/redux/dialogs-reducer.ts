const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>

export type DialogsReducerActionType = SendMessageType | UpdateNewMessageBodyType

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

let initialState = {
    dialogs: [{id: 1, name: 'Andrey'},
        {id: 2, name: 'Stanislav'},
        {id: 3, name: 'Maksim'},
        {id: 4, name: 'Artem'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'What is your name?'},
    ] as Array<MessageType>,
    newMessageBody: ''
}

export type initialStateType = typeof initialState

export const dialogsReducer = (state: initialStateType = initialState, action: DialogsReducerActionType): initialStateType => {
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