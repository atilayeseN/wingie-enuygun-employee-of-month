import { configureStore } from '@reduxjs/toolkit'
import members from "./members"

const store = configureStore({
  reducer: {
    members
  },
})

export default store