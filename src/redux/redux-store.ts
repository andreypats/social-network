import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk  from "redux-thunk";

let rootReducer = combineReducers({    //создаем группу редьюсеров при помощи combineReducers ()
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export let store = legacy_createStore (rootReducer, applyMiddleware(thunk));     //создаем store при помощи redux - legacy_createStore (), подключаем санки (applyMiddleware(thunk))

// window.store = store            //добавляем store в глобальный объект window