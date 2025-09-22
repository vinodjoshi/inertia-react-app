import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const formSlice = createSlice({
  name: 'registerForm',
  initialState,
  reducers: {
    setField: (state, action) => {
        console.log(state);
        console.log(action.payload);
        state[action.payload.field] = action.payload.value;
    },
    resetForm: () => initialState,
  },
});

export const { setField, resetForm } = formSlice.actions;

export const store = configureStore({
  reducer: {
    registerForm: formSlice.reducer,
  },
});