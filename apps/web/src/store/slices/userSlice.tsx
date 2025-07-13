import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: string;
  updatedAt: string;
}

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user.profile', JSON.stringify(action.payload));
    },
    setUserFromStorage: (state) => {
      const storedUser = localStorage.getItem('user.profile');
      if (storedUser) {
        state.currentUser = JSON.parse(storedUser);
        state.isAuthenticated = true;
      }
    },
    removeUser: (state) => {
      localStorage.removeItem('user.profile');
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
  },
});

export const { saveUser, setUserFromStorage, removeUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
