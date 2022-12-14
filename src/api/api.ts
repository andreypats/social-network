import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,

        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': 'a02b14da-2ef0-4b22-8bc0-8b0cfae88869'
        }
    }
);

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow (userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId: number) {
        console.warn('Obsolete method')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile (userId: number) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
}


