import React from 'react';
import avatar from "../../images/avatar.png";
import s from './Users.module.css'
import {UserType} from "../redux/users-reducer";

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
            {
                props.users.map(el => <div key={el.id}>
                    <span>

                        <div className={s.item}>
                            <img src={el.photos.small !== null ? el.photos.small : avatar} alt="avatar"/>
                        </div>
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

export default Users;