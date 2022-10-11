import {combineReducers, EmptyObject, legacy_createStore, Store} from "redux";
import {profileReducer, profileReducerActionType} from "./profile-reducer";
import {dialogsReducer, DialogsReducerActionType} from "./dialogs-reducer";
import {DialogsPageType, ProfilePageType} from "./store";

let reducers = combineReducers({    //создаем группу редьюсеров при помощи combineReducers ()
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export let store:  Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType> = legacy_createStore (reducers);     //создаем store при помощи redux - createStore ()