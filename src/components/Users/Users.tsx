import React from 'react';
import s from "./users.module.css";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from '../../assets/images/img.png'

export class Users extends React.Component< any, any >{

    constructor(props: any) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map((u: UserType) => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} alt={'User photo'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
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