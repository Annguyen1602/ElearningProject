import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import listCoursesReducer from "./reducers/listCoursesReducer";
import listCourses from "./reducers/listCoursesReducer";

export const store = configureStore({
  reducer: {
  listCoursesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
