import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

import {
    followAC,
    setUsersAC,
    unfollowAC,
    UserType,
    setCurrentPageAC,
    setTotalUsersCountAC, setToggleFetchingAC
} from "../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../Preloader/Preloader";

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleisFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersAPIContainer extends React.Component<UsersPropsType, AppStateType> {
    componentDidMount() {
        this.props.toggleisFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleisFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount / 200)
            })
    }

    onPageChanged = (pageNumber: number): any => {
        this.props.toggleisFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleisFetching(false);
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <></>}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleisFetching: (isFetching: boolean) => {
            dispatch(setToggleFetchingAC(isFetching))
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);