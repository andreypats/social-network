import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/img.png'

type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
}

type PropsType = MapDispatchPropsType & MapStatePropsType


export class Users extends React.Component<PropsType> {
    //классовая компонента

    componentDidMount() {           //в этом методе делаем все сайд эффекты
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {                      //у классовой компоненты всегда есть метод render

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div>
                <div>
                    { slicedPages.map( p => {
                        return (
                            <span className={ this.props.currentPage === p ? s.selectedPage: '' }
                                onClick={
                                    (event) => {this.onPageChanged(p)}
                                }>{p}
                            </span>
                        )
                    })}
                </div>
                {
                    this.props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                                 alt={'User photo'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

// {id: 1, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: true, fullName: 'Andrey', status: 'I am champ', location: {city: 'Orsha', country: 'Belarus'}},
// {id: 2, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: true, fullName: 'Maxim', status: 'I am businessman', location: {city: 'Mogilev', country: 'Belarus'}},
// {id: 3, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: false, fullName: 'Stas', status: 'I am dreamer', location: {city: 'St.Petersburg', country: 'Russia'}},
// {id: 4, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: false, fullName: 'Artem', status: 'I am rider', location: {city: 'Kazan', country: 'Russia'}},