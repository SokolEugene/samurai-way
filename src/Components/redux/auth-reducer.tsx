type ActionsTypes = ReturnType<typeof setAuthUserData>

export type DataType = {
    email: string | null
    id: number | null
    login: string | null
    isFetching?: boolean
}

type InitialStateType = {
    email: string | null
    id: number | null
    login: string | null
    isFetching?: boolean
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching : false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state, ...action.data,
                isFetching: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType) => ({type: 'SET-USER-DATA', data} as const)
