import React from "react";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

const App = () => {
    // компонента - функция, возвращающая разметку JSX (HTML внутри JS)
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={"/dialogs/*"} element={<DialogsContainer/>}/>
                    <Route path={"/profile/:profileId"} element={<ProfileContainer/>}/>
                    <Route path={"/profile/*"} element={<ProfileContainer/>}/>
                    <Route path={"/users/*"} element={<UsersContainer/>}/>
                    <Route path={"/login/*"} element={<Login/>}/>
                    <Route path={"/news/*"} element={<News/>}/>
                    <Route path={"/music/*"} element={<Music/>}/>
                    <Route path={"/settings/*"} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
