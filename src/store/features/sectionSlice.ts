import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface Login {
  name: String;
  password: String;
}

const initialState: Login = {
  name: 'Henrique',
  password: '',
};
export const sectionSlice = createSlice({
  initialState,
  name: 'section',
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeNamePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {changeName, changeNamePassword} = sectionSlice.actions;
export const selectName = (state: RootState) => state.section.name;
export const selectPassword = (state: RootState) => state.section.password;
export default sectionSlice.reducer;
