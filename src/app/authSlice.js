import { createSlice } from '@reduxjs/toolkit'

const data = JSON.parse(localStorage.getItem('user')) 

const initialState = {
  user: data?.user||null,
  token: data?.token || null,
}

export const modalSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('user', JSON.stringify({user:state.user,token:state.token}))
    },
    logout:(state)=>{
      state.user = null
      state.token = null
      localStorage.removeItem('user')
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { signup, logout,login,update } = modalSlice.actions

export default modalSlice.reducer