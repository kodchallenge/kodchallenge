import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import editorStore from "./editorStore";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => configureStore({
    reducer: {
        editor: editorStore
    }
})

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore["getState"]>;

export type RootThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const wrapper = createWrapper<RootStore>(makeStore);