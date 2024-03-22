import { SET_ADMIN_INFO } from './types'

export const setAdminInfo = (info) => ({
    type: SET_ADMIN_INFO,
    payload: info,
})
