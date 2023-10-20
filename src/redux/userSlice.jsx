import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        currentUser: null,
        history:null
    },
    reducers: {
        SetCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
        SetHistory(state,action){
            state.history = action.payload
        }
    }
})

export const {SetCurrentUser,SetHistory} = userSlice.actions;
export default userSlice.reducer;