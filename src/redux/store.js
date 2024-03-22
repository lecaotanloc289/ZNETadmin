import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { adminReducer } from './reducers/reducers'

const rootReducer = combineReducers({
    admin: adminReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
