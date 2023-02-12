import { Problem } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
    name: "problem",
    initialState: {
        currentProblem: <Problem | null> null,
    },
    reducers: {
        setCurrentProblemAction: (state, action: PayloadAction<Problem | null>) => {
            state.currentProblem = action.payload;
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.problem,
            };
        },
    },
})

export const { setCurrentProblemAction } = slice.actions

export default slice.reducer