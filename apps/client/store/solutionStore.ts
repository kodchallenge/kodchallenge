import { UserSolutionDetail } from "@/models/UserSolutionDetail";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { HYDRATE } from "next-redux-wrapper";

const slice = createSlice({
    name: "solution",
    initialState: {
        userSolutions: <UserSolutionDetail[]>[],
    },
    reducers: {
        setUserSolutionsAction: (state, action: PayloadAction<UserSolutionDetail[]>) => {
            state.userSolutions = action.payload;
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

export const { setUserSolutionsAction } = slice.actions

export default slice.reducer