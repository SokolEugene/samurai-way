
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
    isFetching:boolean
}

type InitialStateType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching:boolean
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
export type setToggleFetchingActionType = {
    type: "SET_TOGGLE_FETCHING"
    isFetching: boolean
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
    currentPage: 1,
    isFetching: false
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
        case 'SET_TOGGLE_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}
export const follow = (userId: string): FollowActionType => ({type: 'FOLLOW', userId});
export const unfollow = (userId: string): UnfollowActionType => ({type: 'UNFOLLOW', userId});

export const setUsers = (users: UserType[]): SetUsersActionType => ({type: 'SET_USERS', users});
export const setCurrentPage = (currentPage: number): SetPagesActionType => ({type: 'SET_CURRENT_PAGE', currentPage});
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({type: 'SET_TOTAL_USERS_COUNT', totalCount})
export const setToggleFetching = (isFetching: boolean): setToggleFetchingActionType => ({type: 'SET_TOGGLE_FETCHING', isFetching})
