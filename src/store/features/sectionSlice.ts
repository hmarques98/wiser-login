import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface Login {
  email: string;
  password: string;
  hasErrorEmail: boolean;
  hasErrorPassword: boolean;
}

const initialState: Login = {
  email: '',
  password: '',
  hasErrorEmail: false,
  hasErrorPassword: false,
};
export const sectionSlice = createSlice({
  initialState,
  name: 'section',
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeNamePassword: (state, action) => {
      state.password = action.payload;
    },
    submitForm: (state) => {
      const isEmail = state.email.includes('@');
      const minPassword = state.password.length >= 6;
      if (!isEmail) {
        state.hasErrorEmail = true;
        return;
      } else {
        state.hasErrorEmail = false;
      }
      if (!minPassword) {
        state.hasErrorPassword = true;
        return;
      }

      state.hasErrorEmail = false;
      state.hasErrorPassword = false;
    },
  },
});

export const {
  changeEmail,
  changeNamePassword,
  submitForm,
} = sectionSlice.actions;
export const selectEmail = (state: RootState) => state.section.email;
export const selectPassword = (state: RootState) => state.section.password;
export const stateHasErrorEmail = (state: RootState) =>
  state.section.hasErrorEmail;
export const stateHasErrorPassword = (state: RootState) =>
  state.section.hasErrorPassword;
export default sectionSlice.reducer;
