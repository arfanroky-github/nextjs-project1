import axios from "axios";

const usersApi = axios.create({
    baseURL: 'http://localhost:8000'
})

const getUser = async () => {
    const res = await usersApi.get('/users');
    return res.data
}

const createUser = async (user) => {
    return await usersApi.post('/users', user);
}

const updateUser = async (user) => {
   return await usersApi.put(`users/${user.id}`, user);
}

const deleteUser = async ({id}) => {
 return await usersApi.delete(`/users/${id}`, id);
}

export {
    getUser,
    createUser,
    updateUser,
    deleteUser
}