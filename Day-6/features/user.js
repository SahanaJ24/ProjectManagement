import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{value:{name:'Hai',email:"Hai"}},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload
        },
        logout:(state)=>{
            state.value={value:{name:'',email:''}}
        }
        
    }
});
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;
//payload- is used for changing the state values
//type- which type of action is triggered