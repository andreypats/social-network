import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";

export const Users = (props: any) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: true, fullName: 'Andrey', status: 'I am champ', location: {city: 'Orsha', country: 'Belarus'}},
            {id: 2, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: true, fullName: 'Maxim', status: 'I am businessman', location: {city: 'Mogilev', country: 'Belarus'}},
            {id: 3, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: false, fullName: 'Stas', status: 'I am dreamer', location: {city: 'St.Petersburg', country: 'Russia'}},
            {id: 4, photoUrl: 'https://cdn.images.express.co.uk/img/dynamic/79/590x/arnie-body-builder-series-407806.jpg', followed: false, fullName: 'Artem', status: 'I am rider', location: {city: 'Kazan', country: 'Russia'}},
        ])
    }

    return (
        <div>
            {
                props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto} alt={''}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};