import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../redux/users-reducer";
import {Dispatch} from "redux";
import {Users} from "./Users";

type MapStateToPropsType = {
    //usersPage: UsersPageType
    users: UserType[]
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {dispatch(followAC(userId))},
        unfollow: (userId: string) => {dispatch(unfollowAC(userId))},
        setUsers: (users: UserType[]) => {dispatch(setUsersAC(users))}
    }
}


export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users);
