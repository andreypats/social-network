
export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unfollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>

export type usersReducerActionType = FollowType | UnfollowType | SetUsersType

let initialState: UsersType = {
    users: [
        // {id: 1, followed: true, fullName: 'Andrey', status: 'I am champ', location: {city: 'Orsha', country: 'Belarus'}},
        // {id: 2, followed: true, fullName: 'Maxim', status: 'I am businessman', location: {city: 'Mogilev', country: 'Belarus'}},
        // {id: 3, followed: false, fullName: 'Stas', status: 'I am dreamer', location: {city: 'St.Petersburg', country: 'Russia'}},
        // {id: 4, followed: false, fullName: 'Artem', status: 'I am rider', location: {city: 'Kazan', country: 'Russia'}},
    ]
}

export const usersReducer = (state = initialState, action: usersReducerActionType): UsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
                };
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)


// export const updateNewPostTextActionCreator = (text: string | undefined) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// } as const)


//34:45