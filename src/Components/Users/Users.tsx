import React from 'react';
import s from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersCointainer";
import avatar from "../../images/avatar.png";


export const Users = (props: UsersPropsType) => {
    console.log(props.users)
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
