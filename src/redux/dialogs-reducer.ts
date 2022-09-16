import {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

type SendMessageType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>

type DialogsReducerActionType = SendMessageType | UpdateNewMessageBodyType

export const dialogsReducer = (state: any, action: DialogsReducerActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)