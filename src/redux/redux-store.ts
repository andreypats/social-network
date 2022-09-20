import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer, profileReducerActionType} from "./profile-reducer";
import {dialogsReducer, DialogsReducerActionType} from "./dialogs-reducer";
import {DialogsPageType, ProfilePageType} from "./store";

let reducers = combineReducers({    //создаем группу редьюсеров при помощи combineReducers ()
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export let store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType> = createStore (reducers);     //создаем store при помощи redux - createStore ()