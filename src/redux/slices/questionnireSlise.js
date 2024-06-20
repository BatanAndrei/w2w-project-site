import { createSlice } from '@reduxjs/toolkit';
import { postQuestionnire } from '../../api/postQuestionnire';


export const initialState = {
    fileNameAvatarUser: '',
    statusLoadQuestionnire: null,
    errorLoadQuestionnire: null,
    paramsQuestionnire: {
        fullName: "",
        nikTelegrem: "",
        birthDate: "",
        jobTitle: "",
        topicСommunication: [],
        publicSpeaking: "",
        community: "",
    }
};

export const questionnireSlice = createSlice({
    name: "questionnire",
    initialState,
    reducers: {   
        getDataFromQuestionnireFirst: (state, action) => {
            state.paramsQuestionnire.fullName = action.payload.fullName;
            state.paramsQuestionnire.nikTelegrem = action.payload.nikTelegrem;
            state.paramsQuestionnire.birthDate = action.payload.birthDate;
            state.paramsQuestionnire.jobTitle = action.payload.jobTitle;
            state.paramsQuestionnire.community = action.payload.community;
        },

        getDataFromQuestionnireTopicСommunication: (state, action) => {
            state.paramsQuestionnire.topicСommunication = action.payload.topicСommunication;
        },

        getDataFromQuestionnireSecond: (state, action) => {
            
        },

        getDataFromQuestionnireThird: (state, action) => {
            
        },

        getDataFromQuestionnireFouth: (state, action) => {
            
        },
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

export const { getDataFromQuestionnireFirst, getDataFromQuestionnireFirstReadonlyField, getDataFromQuestionnireSecond, getDataFromQuestionnireYhird, getDataFromQuestionnireFouth } = questionnireSlice.actions;