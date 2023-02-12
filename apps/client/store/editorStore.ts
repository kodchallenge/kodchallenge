import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
    name: "editor",
    initialState: {
        theme: <EditorThemes>"dracula",
    },
    reducers: {
        setEditorThemeAction: (state, action: PayloadAction<EditorThemes>) => {
            state.theme = action.payload;
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.editor,
            };
        },
    },
})

export const { setEditorThemeAction } = slice.actions

export default slice.reducer