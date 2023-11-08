import React from 'react';
import avatar from "../../images/avatar.png";
import s from './Users.module.css'
import {UserType} from "../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    unfollow: (userId: string) => void
    follow: (userId: string) => void
}
const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.pagination}>
                {pages.map(el => {
                    return <span className={props.currentPage === el ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(el)
                                 }}>{el}</span>
                })}
            </div>
            <div>{
                props.users.map(el => <div key={el.id} className={s.userPreShow}>
                    <span>
                        <div className={s.item}>
                            <NavLink to={`/profile/${el.id}`}><img
                                src={el.photos.small !== null ? el.photos.small : avatar} alt="avatar"/></NavLink>
                        </div>
                        <span>
                            <div>{el.name}</div>
                            {/*<div>{el.status}</div>*/}
                        </span>

                    <div>{el.followed
                        ? <button onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}</div>
                    </span>
                </div>)
            }</div>
        </div>
    );
};

export default Users;