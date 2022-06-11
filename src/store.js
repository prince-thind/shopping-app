import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './features/items/items'

export default configureStore({
    reducer: {
        items: itemsReducer
    }
})