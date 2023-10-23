import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: null,
        history:{},
        course:null
    },
    reducers: {
        SetCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        SetHistory(state,action){
            state.history = action.payload;
        },
        SetActiveCourse(state,action){
            state.course = action.payload;
        }
    }
})

export const {SetCurrentUser,SetHistory,SetActiveCourse} = userSlice.actions;
export default userSlice.reducer;