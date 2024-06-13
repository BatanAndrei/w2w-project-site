import { createSlice } from '@reduxjs/toolkit';
import { postAvatarUser } from '../../api/postAvatarUser';


export const initialState = {
    fileNameAvatarUser: '',
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
            state.fileNameAvatarUser = action.payload;
    });

        builder
        .addCase(postAvatarUser.rejected, 
            (state, action) => {
            state.statusLoadAvatar = "rejected";
            state.errorLoadaAvatar = action.payload;
    })
    }
});

export const { } = avatarUserSlice.actions;