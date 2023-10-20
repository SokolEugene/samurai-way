import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    UserType,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../redux/users-reducer";
import {Dispatch} from "redux";
import Users from "./Users";

type MapStateToPropsType = {
    //usersPage: UsersPageType
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        //totalUsersCount: state.usersPage.totalUsersCount
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
        }
    }
}


export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users);