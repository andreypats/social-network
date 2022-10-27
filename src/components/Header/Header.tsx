import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props: any) => {
    return (
        <header className={s.header}>

            <img
                alt={"HeaderImg"}
                src={'https://avatars.mds.yandex.net/i?id=afa7816f8b9e4bfaa5b33c023d3f954b-4571459-images-thumbs&n=13'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}