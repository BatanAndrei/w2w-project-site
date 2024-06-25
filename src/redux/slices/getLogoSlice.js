import { createSlice } from '@reduxjs/toolkit';
import { getLogo } from '../../api/getLogo';


export const initialState = {
    responseStatusLogo: '',
    statusLoadLogo: null,
    errorLoadLogo: null,
    
};

export const getLogoSlice = createSlice({
    name: "summary",
    initialState,
    reducers: {   

    },

    extraReducers: (builder) => {
        builder
        .addCase(getLogo.pending, (state) => {
            state.statusLoadLogo = "loading";
            state.errorLoadLogo = null;
    });

        builder
        .addCase(getLogo.fulfilled, 
            (state, action) => { 
            state.statusLoadLogo = "resolved";
            state.errorLoadLogo = null;
            state.responseStatusLogo = action.payload;
    });

        builder
        .addCase(getLogo.rejected, 
            (state, action) => {
            state.statusLoadLogo = "rejected";
            state.errorLoadLogo = action.payload;
    })
    }
});

export const { } = getLogoSlice.actions;