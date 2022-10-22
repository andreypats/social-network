export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    photoUrl: string,
    photos: {small: string | undefined, large: string | undefined},
    followed: boolean,
    name: string,
    fullName: string,
    status: string,
    location: LocationType
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number;
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type FollowType = ReturnType<typeof followAC>
export type UnfollowType = ReturnType<typeof unfollowAC>
export type SetUsersType = ReturnType<typeof setUsersAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>

export type usersReducerActionType = FollowType | UnfollowType | SetUsersType | SetCurrentPageType | setTotalUsersCountType

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
                users: action.users,
                };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
                };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
