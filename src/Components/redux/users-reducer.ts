//import {v1} from "uuid";
import {ActionsTypes} from "./redux-store";


export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: {
        small: string | null
        large: string | null
    }
    location: {
        country: string
        city: string
    }
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}
export type FollowActionType = {
    type: "FOLLOW"
    userId: string
}
export type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: string
}
export type SetUsersActionType = {
    type: "SET_USERS"
    users: UserType[]
}
export type SetPagesActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type setTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalCount: number
}
const initialState: InitialStateType = {
    users: [/*
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
        },
    */],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            };
        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
            };
        case "SET_USERS":
            return {
                ...state, users: action.users
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            };
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalCount: action.totalCount
            }
        default:
            return state
    }
}
export const followAC = (userId: string): FollowActionType => ({type: 'FOLLOW', userId});
export const unfollowAC = (userId: string): UnfollowActionType => ({type: 'UNFOLLOW', userId});

export const setUsersAC = (users: UserType[]): SetUsersActionType => ({type: 'SET_USERS', users});
export const setCurrentPageAC = (currentPage: number): SetPagesActionType => ({type: 'SET_CURRENT_PAGE', currentPage});
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountActionType => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
