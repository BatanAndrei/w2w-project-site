import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const summary = axios.create({
    baseURL: `https://dipdeepcode.ru/api`,
    withCredentials: true
});

export const getSummary = createAsyncThunk(
    "summary/getSummary", 
    async (_, {rejectWithValue}) => { 

try {
        const response = await summary.get(`/chatRoom/summary`);

        if(response.status !== 200) {
            throw new Error('Something went wrong!');
        }
        
        const data = response;
        
        return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);