import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isActivModal: false,
    isActiveModalFillLeter: false,
    isActiveModalSentCheck: false,
};

export const informationSlice = createSlice({
    name: "click",
    initialState,
    reducers: {   
    
        modalPersonalDatalReducer: (state, action) => {
            state.isActivModal = action.payload;
        },

        modalFillLeterlReducer: (state, action) => {
            state.isActiveModalFillLeter = action.payload;
        },

        modalSentChecklReducer: (state, action) => {
            state.isActiveModalSentCheck = action.payload;
        },
    }
});

export const { modalPersonalDatalReducer, modalFillLeterlReducer, modalSentChecklReducer } = informationSlice.actions;