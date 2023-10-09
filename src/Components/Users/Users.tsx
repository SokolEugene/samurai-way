import React from 'react';
import s from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersCointainer";
import avatar from "../../images/avatar.png";
import {v1} from "uuid";


export const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
      props.setUsers([
        {
            userId: v1().slice(0, 8),
            followed: false,
            userName: "Dirty Lex",
            userStatus: "27",
            location: {country: "country", city: "city"}
        },
        {
            userId: v1().slice(0, 8),
            followed: false,
            userName: "Nik",
            userStatus: "27",
            location: {country: "country", city: "city"}
        },
        {
            userId: v1().slice(0, 8),
            followed: true,
            userName: "白兰",
            userStatus: "27",
            location: {country: "Belarus", city: "Vtb"}
        }
    ])
  }
    return (
        <div className={s.users}>
            {
                props.users.map(el => <div key={el.userId}>
                    <span>
                         <div className={s.item}><img src={avatar} alt="avatar"/></div>
                    <div>{el.followed
                        ? <button onClick={()=>{props.unfollow(el.userId)}}>Unfollow</button>
                        : <button onClick={()=>{props.follow(el.userId)}}>Follow</button>}</div>
                    </span>

                    <span>
                        <span>
                            <div>{el.userName}</div>
                            <div>{el.userStatus}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    );
};
