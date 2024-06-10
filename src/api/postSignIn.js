import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const AuthSignIn = axios.create({
    baseURL: `https://dipdeepcode.ru/api/auth`,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true           
});

export const postSignIn = createAsyncThunk(
    "signIn/postSignIn", 
    async ({phoneNumberOrEmail, password}, {rejectWithValue}) => { 

try {
        const response = await AuthSignIn.post(`/login`, {
            phoneNumberOrEmail: phoneNumberOrEmail,
            password: password
        });

        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = response.status;
        console.log(response)
            return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);