import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7be99c63-5a64-429e-83a0-e1cc010cb04c'
    }
})


export const getUsers = (page: number, count: number): Promise<any> => {
    return instance.get(`users?page=${page}&count=${count}`)
}

export const getUserProfile = (userId: number): Promise<any> => {
    return instance.get(`profile/${userId}`)
}

export const authMe = (): Promise<any> => {
    return instance.get(`auth/me`)
}


export const followUser = (userId: number): Promise<any> => {
    return instance.post(`/follow/${userId}`)
}

export const unFollowUser = (userId: number): Promise<any> => {
    return instance.delete(`/follow/${userId}`)
}