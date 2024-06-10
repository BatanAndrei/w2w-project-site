import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const AuthRegister = axios.create({
    baseURL: `https://dipdeepcode.ru/api/auth`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true           
});

export const postAuthRegistration = createAsyncThunk(
    "authRegistration/postAuthRegistration", 
    async (verificationСode, {rejectWithValue}) => { 

try {
        const response = await AuthRegister.post(`/register?passcode=${verificationСode}`, {});

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