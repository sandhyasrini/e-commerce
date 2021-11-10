import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from "./slices"

export default configureStore({
  reducer: userSlice.reducer
})