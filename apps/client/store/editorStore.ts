import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
    name: "editor",
    initialState: {
        theme: <EditorThemes>"dracula",
        selectedLanguage: <string> "",
        output: <string> "",
        isError: <boolean> false,
        isSuccess: <boolean> false,
        isTestable: <boolean> false,
    },
    reducers: {
        setEditorThemeAction: (state, action: PayloadAction<EditorThemes>) => {
            state.theme = action.payload;
        },
        setSelectedLanguageAction: (state, action: PayloadAction<string>) => {
            state.selectedLanguage = action.payload;
        },
        setEditorOutputConsoleAction: (state, action: PayloadAction<{isError?: boolean, isSuccess?: boolean, output: string}>) => {
            state.output = action.payload.output ?? "";
            state.isError = !!action.payload.isError;
            state.isSuccess = !!action.payload.isSuccess;
        },
        setIsTestableAction: (state, action: PayloadAction<boolean>) => {
            state.isTestable = action.payload;
        }
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

export const { setEditorThemeAction, setSelectedLanguageAction, setEditorOutputConsoleAction, setIsTestableAction } = slice.actions

export default slice.reducer