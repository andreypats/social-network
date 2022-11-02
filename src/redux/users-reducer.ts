import {usersAPI} from "../api/api";

export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    photoUrl: string,
    photos: { small: string | undefined, large: string | undefined },
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
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type FollowType = ReturnType<typeof followSuccess>
export type UnfollowType = ReturnType<typeof unfollowSuccess>
export type SetUsersType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export type setIsFetchingType = ReturnType<typeof setIsFetching>
export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>

export type usersReducerActionType =
    FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | setTotalUsersCountType
    | setIsFetchingType
    | toggleFollowingProgressType

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return <UsersType>{
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId),
            };
        default:
            return state;
    }
}

//Action Creators
export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
} as const)


// getUsers (getUserThunkCreator) - функция, которая принимает данные и возвращает санку (getUserThunk)
// санка (getUserThunk) - функция которая принимает dispatch, делает внутри себя асинхронные операции и диспатчит экшены
export const getUsers = (currentPage: number, pageSize: number) => {

    return (dispatch: any) => {

        dispatch (setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
            dispatch (setIsFetching(false));
            dispatch (setUsers(data.items))
            dispatch (setTotalUsersCount(data.totalCount))
        });
    }
}

export const follow = (userId: number) => {

    return (dispatch: any) => {
        dispatch (toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (followSuccess(userId))
                }
                dispatch (toggleFollowingProgress(false, userId));
            });
    }
}

export const unfollow = (userId: number) => {

    return (dispatch: any) => {
        dispatch (toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (unfollowSuccess(userId))
                }
                dispatch (toggleFollowingProgress(false, userId));
            });
    }
}