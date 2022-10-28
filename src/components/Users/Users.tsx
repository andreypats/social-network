import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/img.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: []
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
}

type UsersPropsType = MapDispatchPropsType
    & MapStatePropsType
    & {onPageChanged: (pageNumber: number)=>void}


export let Users = (props: UsersPropsType) => {
    //презентационная компонента

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return (
                        <span className={props.currentPage === p ? s.selectedPage : ''}
                              onClick={
                                  (event) => {
                                      props.onPageChanged(p)
                                  }
                              }>-{p}-
                            </span>
                    )
                })}
            </div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                     alt={'User photo'}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'a02b14da-2ef0-4b22-8bc0-8b0cfae88869'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id: number) => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'a02b14da-2ef0-4b22-8bc0-8b0cfae88869'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id);
                                        });

                                    props.follow(u.id)

                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );

}