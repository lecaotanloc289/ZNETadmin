import { SET_ADMIN_INFO } from '../actions/types'

const initialState = {
    admin: null,
}

export const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ADMIN_INFO: {
            return { ...state, admin: action.payload }
        }
        default:
            return state
    }
}
