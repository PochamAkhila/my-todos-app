import { configureStore } from '@reduxjs/toolkit'
import  TodoSlice  from '../reducers/Todo'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, TodoSlice)

const Store = configureStore({
    reducer : {
        Todo : persistedReducer
    }
})

export default Store

