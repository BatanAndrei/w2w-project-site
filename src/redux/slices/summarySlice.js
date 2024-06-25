import { createSlice } from '@reduxjs/toolkit';
import { getSummary } from '../../api/getSummary';


export const initialState = {
    responseStatusSummary: '',
    statusLoadSummary: null,
    errorLoadSummary: null,
    
};

export const summarySlice = createSlice({
    name: "summary",
    initialState,
    reducers: {   

    },

    extraReducers: (builder) => {
        builder
        .addCase(getSummary.pending, (state) => {
            state.statusLoadSummary = "loading";
            state.errorLoadSummary = null;
    });

        builder
        .addCase(getSummary.fulfilled, 
            (state, action) => { 
            state.statusLoadSummary = "resolved";
            state.errorLoadSummary = null;
            state.responseStatusSummary = action.payload;
    });

        builder
        .addCase(getSummary.rejected, 
            (state, action) => {
            state.statusLoadSummary = "rejected";
            state.errorLoadSummary = action.payload;
    })
    }
});

export const { } = summarySlice.actions;