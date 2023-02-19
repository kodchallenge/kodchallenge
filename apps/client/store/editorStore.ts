import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
    name: "editor",
    initialState: {
        theme: <EditorThemes>"dracula",
        selectedLanguage: <string> "",
        output: <string> "",
    },
    reducers: {
        setEditorThemeAction: (state, action: PayloadAction<EditorThemes>) => {
            state.theme = action.payload;
        },
        setSelectedLanguageAction: (state, action: PayloadAction<string>) => {
            state.selectedLanguage = action.payload;
        },
        setEditorOutputConsoleAction: (state, action: PayloadAction<string>) => {
            state.output = action.payload;
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

export const { setEditorThemeAction, setSelectedLanguageAction, setEditorOutputConsoleAction } = slice.actions

export default slice.reducer