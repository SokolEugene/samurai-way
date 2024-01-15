import React from 'react';
import avatar from "../../images/avatar.png";
import s from './Users.module.css'
import {UserType} from "../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
    console.log(props)
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
                        </span>

                    <div>
                         { el.followed ? <button onClick={() => {

                                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true, headers: {'API-KEY': 'a3cb7ea3-8b90-434f-8381-9518c975c1eb'}})
                                     .then(res => {
                                         debugger
                                         if (res.data.resultCode == 0) {
                                             props.unfollow(el.id)
                                         }
                                     });
                             }}> unfollow </button>
                             : <button onClick={() => {
                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {withCredentials: true, headers: {'API-KEY': 'a3cb7ea3-8b90-434f-8381-9518c975c1eb'}})
                                     .then(response => {
                                         debugger
                                         if (response.data.resultCode == 0) {
                                             props.follow(el.id)
                                         }
                                     });
                             }}> Follow </button>}
                             </div>
                             </span>
                </div>)
            }</div>
        </div>
    );
};
export default Users;