import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const AuthCreate = axios.create({
    baseURL: `https://dipdeepcode.ru/api/auth`,
                
});

export const postAuthCreate = createAsyncThunk(
    "authCreate/postAuthCreate", 
    async ({phoneNumber, email, password}, {rejectWithValue}) => { 

try {
        const response = await AuthCreate.post(`/create`, {
            phoneNumber: phoneNumber,
            email: email,
            password: password
        },{
            withCredentials: true,
        });

       /*  const response = await fetch('https://dipdeepcode.ru/api/auth/create', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                email: email,
                password: password
                })
        }) */
    
        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = response.status;

            return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);