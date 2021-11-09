import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './slices'

export default configureStore({
  reducer: { loginReducer },
})