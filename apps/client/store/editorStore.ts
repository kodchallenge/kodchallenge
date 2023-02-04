import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const slice = createSlice({
    name: "editor",
    initialState: {
        theme: <EditorThemes> "dracula",
    },
    reducers: {
        setEditorThemeAction: (state, action: PayloadAction<EditorThemes>) => {
            state.theme = action.payload;
        },
    }
})

export const { setEditorThemeAction } = slice.actions

export default slice.reducer