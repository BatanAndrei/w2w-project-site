import { createSlice } from '@reduxjs/toolkit';
import { postQuestionnire } from '../../api/postQuestionnire';


export const initialState = {
    fileNameAvatarUser: '',
    statusLoadQuestionnire: null,
    errorLoadQuestionnire: null,
    paramsQuestionnire: {
        
    }
};

export const questionnireSlice = createSlice({
    name: "questionnire",
    initialState,
    reducers: {   

    },

    extraReducers: (builder) => {
        builder
        .addCase(postQuestionnire.pending, (state) => {
            state.statusLoadQuestionnire = "loading";
            state.errorLoadQuestionnire = null;
    });

        builder
        .addCase(postQuestionnire.fulfilled, 
            (state, action) => { 
            state.statusLoadQuestionnire = "resolved";
            state.errorLoadQuestionnire = null;
            state.fileNameAvatarUser = action.payload;
    });

        builder
        .addCase(postQuestionnire.rejected, 
            (state, action) => {
            state.statusLoadQuestionnire = "rejected";
            state.errorLoadQuestionnire = action.payload;
    })
    }
});

export const { } = questionnireSlice.actions;