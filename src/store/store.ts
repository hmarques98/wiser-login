import {configureStore} from '@reduxjs/toolkit';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import sectionSlice from './features/sectionSlice';

// const rootReducer = combineReducers<{}>({
//   section: sectionSlice,
// });

export const store = configureStore({
  reducer: {
    section: sectionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
