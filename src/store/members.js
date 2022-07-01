import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  members: []
}

export const site = createSlice({
  name: 'site',
  initialState,
  reducers: {
    addMember: (state, action) => {
      state.members = [...state.members,action.payload]
      
    },
    getMemberById: (state,action) => {
      return action.payload
    },
    increasePoint: (state,action) => {
      state.members = state.members.map(e => {
        if (e.id === action.payload) {
          e.point += 1
        }
        return e
      }).sort((a,b) => {
        return b.point - a.point;
      })
    }
  },
})

export const { addMember , increasePoint,sortMembers } = site.actions
export default site.reducer