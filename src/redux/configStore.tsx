import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import listCourses from "./reducers/listCourses";

export const store = configureStore({
  reducer: {
    listCourses,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
