import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAuthenticated: false,
    sessionId: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');
      localStorage.setItem('account_id', action.payload.id);
    },
  },
});

export const { setUser } = auth.actions;
export default auth.reducer;
