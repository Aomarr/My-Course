import { createSlice } from '@reduxjs/toolkit'

const getAuth = () => {
    const authData = JSON.parse(sessionStorage.getItem('user'));
    if (authData) {
        return authData
    }   
    return null    
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: getAuth()
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    },
    removeUser: state => {
      state.value = null;
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token')
    },
  },
})

export const { setUser, removeUser } = authSlice.actions

const authReducer = authSlice.reducer

export default authReducer