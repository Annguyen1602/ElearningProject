import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./reducers/coursesReducer";
export const store = configureStore({
  reducer: { coursesReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
