import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': 'a3cb7ea3-8b90-434f-8381-9518c975c1eb'}
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })

    }
}
