import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import editorStore from "./editorStore";
import { createWrapper } from "next-redux-wrapper";
import problemStore from "./problemStore";
import appStore from "./appStore";

export const makeStore = () => configureStore({
  reducer: {
    editor: editorStore,
    problem: problemStore,
    app: appStore,
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