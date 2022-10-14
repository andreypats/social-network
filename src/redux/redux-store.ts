import {combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({    //создаем группу редьюсеров при помощи combineReducers ()
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = legacy_createStore (rootReducer);     //создаем store при помощи redux - legacy_createStore ()


// window.store = store            //добавляем store в глобальный объект window