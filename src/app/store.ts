import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../features/sidebar/sidebar-slice";

import { dataApi } from "../features/data-api/data-api-slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dataApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
