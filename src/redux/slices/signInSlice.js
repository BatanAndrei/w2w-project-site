import { createSlice } from '@reduxjs/toolkit';
import { postSignIn } from '../../api/postSignIn';


export const initialState = {
    statusSignInUser: '',
    statusLoadSignIn: null,
    errorLoadSignIn: null,
};

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {   

        statusLoadNullReducer: (state, action) => {
            state.statusLoadCreate = null;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(postSignIn.pending, (state) => {
            state.statusLoadSignIn = "loading";
            state.errorLoadSignIn = null;
    });

        builder
        .addCase(postSignIn.fulfilled, 
            (state, action) => { 
            state.statusLoadSignIn = "resolved";
            state.errorLoadSignIn = null;
            state.statusSignInUser = action.payload;
    });

        builder
        .addCase(postSignIn.rejected, 
            (state, action) => {
            state.statusLoadSignIn = "rejected";
            state.errorLoadSignIn = action.payload;
    })
    }
});

export const {} = signInSlice.actions;