import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: null,
        history:{},
        course:null,
        isClOpen:false
        
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
        },
        SetIsClOpen(state,action){
            state.isClOpen = action.payload;
        }
    }
})

export const {SetCurrentUser,SetHistory,SetActiveCourse,SetIsClOpen} = userSlice.actions;
export default userSlice.reducer;