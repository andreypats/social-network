import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsPageType, ProfilePageType} from "./redux/store";
import {EmptyObject, Store} from "redux";
import {profileReducerActionType} from "./redux/profile-reducer";
import {DialogsReducerActionType} from "./redux/dialogs-reducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    store: Store<EmptyObject & {profilePage: ProfilePageType, dialogsPage: DialogsPageType}, profileReducerActionType | DialogsReducerActionType>
}

const App: React.FC<AppType> = (props) => {
    // компонента - функция, возвращающая разметку JSX (HTML внутри JS)

  return (
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path={"/dialogs/*"} element={<DialogsContainer store={props.store}/>}/>
            <Route path={"/profile/*"} element={<Profile store={props.store}/>}/>
            <Route path={"/news/*"} element={<News/>}/>
            <Route path={"/music/*"} element={<Music/>}/>
            <Route path={"/settings/*"} element={<Settings/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
