import React from 'react';
import s from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersCointainer";
import avatar from "../../images/avatar.png";
//import {v1} from "uuid";
import axios from "axios";


export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {props.setUsers(res.data.items)});
        }
    }

    return (
        <div className={s.users}>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        {/*<div className={s.item}><img src={avatar} alt="avatar"/></div>*/}
                        <div className={s.item}><img src={el.photos.small !== null ? el.photos.small : avatar}
                                                     alt="avatar"/></div>
                    <div>{el.followed
                        ? <button onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}</div>
                    </span>

                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{"el.location.country"}</div>
                            <div>{"el.location.city"}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
};
