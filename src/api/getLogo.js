import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const logo = axios.create({
    baseURL: `https://dipdeepcode.ru/api`,
    withCredentials: true
});

export const getLogo = createAsyncThunk(
    "logo/getLogo", 
    async ( id, {rejectWithValue}) => { 

try {
        const response = await logo.get(`/image/${id}`);

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