import { configureStore } from '@reduxjs/toolkit'
import Userslice from './reducer/Userslice'
const store = configureStore({
  reducer: {
    User :Userslice
  },
})
export default store;