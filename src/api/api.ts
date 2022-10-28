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
    getUsers (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

// доделать самому
// export const follow = (currentPage = 1, pageSize = 10) => {
//     return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }

