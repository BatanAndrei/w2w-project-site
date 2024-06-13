import { createSlice } from '@reduxjs/toolkit';
import { postAvatarUser } from '../../api/postAvatarUser';


export const initialState = {
    statusAvatarUser: '',
    statusLoadAvatar: null,
    errorLoadaAvatar: null,
};

export const avatarUserSlice = createSlice({
    name: "avatarUser",
    initialState,
    reducers: {   

    },

    extraReducers: (builder) => {
        builder
        .addCase(postAvatarUser.pending, (state) => {
            state.statusLoadAvatar = "loading";
            state.errorLoadaAvatar = null;
    });

        builder
        .addCase(postAvatarUser.fulfilled, 
            (state, action) => { 
            state.statusLoadAvatar = "resolved";
            state.errorLoadaAvatar = null;
            state.statusAvatarUser = action.payload;
    });

        builder
        .addCase(postAvatarUser.rejected, 
            (state, action) => {
            state.statusLoadAvatar = "rejected";
            state.errorLoadaAvatar = action.payload;
    })
    }
});

export const { chooseFotoForAvatarReducer } = avatarUserSlice.actions;