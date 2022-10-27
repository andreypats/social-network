export type AuthType = {
    id: number | null
    email: string  | null
    login: string  | null
    isAuth: boolean
}

const SET_USER_DATA = 'SET_USER_DATA';

export type SetUserDataType = ReturnType<typeof setUserData>

export type usersReducerActionType = SetUserDataType

export let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: usersReducerActionType): AuthType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

//Action Creators
export const setUserData = (id: number | null, email: string  | null, login: string  | null) => ({
    type: SET_USER_DATA, data: {id, email, login}
} as const)
