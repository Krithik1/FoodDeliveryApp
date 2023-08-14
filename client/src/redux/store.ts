// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userLoggedInReducer from './userLoggedIn';

const store = configureStore({
  reducer: {
    userLoggedIn: userLoggedInReducer,
  }
});

export default store;