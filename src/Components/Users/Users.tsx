import React from 'react';
import s from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersCointainer";
import avatar from "../../images/avatar.png";
//import {v1} from "uuid";
import axios from "axios";
import {AppStateType} from "../redux/redux-store";


class Users extends React.Component<UsersPropsType, AppStateType> {

    /*constructor(props: UsersPropsType) {
        super(props);
    }*/

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount/200)
            })
    }

    onPageChanged = (pageNumber: number): any => {
     this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                //this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div className={s.pagination}>
                    {pages.map(el => {
                        return <span className={this.props.currentPage === el ? s.selectedPage : ''}
                                     onClick={()=>{this.onPageChanged(el)}}>{el}</span>
                    })}
                </div>
                {
                    this.props.users.map(el => <div key={el.id}>
                    <span>
                        {/*<div className={s.item}><img src={avatar} alt="avatar"/></div>*/}
                        <div className={s.item}>
                            <img src={el.photos.small !== null ? el.photos.small : avatar} alt="avatar"/>
                        </div>
                    <div>{el.followed
                        ? <button onClick={() => {
                            this.props.unfollow(el.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(el.id)
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
    }
}

export default Users;


