import apisauce from 'apisauce'
import BASE_URL, { APIs } from '../Constants/api'

const create = (baseURL = BASE_URL) => {
    const api = apisauce.create({
        baseURL: `${baseURL}`,
        timeout: 60000
    })

    const getUsers = (headers) => {
        return api.get(`${APIs.users}`, null, { headers })
    }

    return {
        getUsers
    }
}

export default {
    create
}