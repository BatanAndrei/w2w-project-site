import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const Questionnire = axios.create({
    baseURL: `https://dipdeepcode.ru/api`,
    withCredentials: true           
});

export const postQuestionnire = createAsyncThunk(
    "questionnire/postQuestionnire", 
    async ({}, {rejectWithValue}) => { 

try {
    const response = await Questionnire.post(`/questionnire`, {

    });
        
    if(response.status !== 200) {
            throw new Error('Something went wrong!');
        }
            
        const data = response.status;
        
        return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);