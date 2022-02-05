import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7be99c63-5a64-429e-83a0-e1cc010cb04c'
    }
})


export const getUsers = (page: number, count: number) => {
    return instance.get(`users?page=${page}&count=${count}`)
}

export const getUserProfile = (userId: number) => {
    return instance.get(`profile/${userId}`)
}

export const authMe = () => {
    return instance.get(`auth/me`)
}


export const followUser = (userId: number) => {
    return instance.post(`/follow/${userId}`)
}

export const unFollowUser = (userId: number) => {
    return instance.delete(`/follow/${userId}`)
}

export const getProfileStatus = (userId: number) => {
    return instance.get<string | null>(`/profile/status/${userId}`)

}

export const updateProfileStatus = (status: string) => {
    return instance.put<ProfileResponseType>(`/profile/status/`, {status})

}


type ProfileResponseType = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: {}
}

