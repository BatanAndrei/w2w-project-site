import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const AuthRegister = axios.create({
    baseURL: `https://dipdeepcode.ru/api/auth`,
    withCredentials: true            
});
//https://dipdeepcode.ru/api/auth/register?passcode=${verificationСode}
//https://dipdeepcode.ru/api/auth/register?passcode=4598

export const postAuthRegistration = createAsyncThunk(
    "authRegistration/postAuthRegistration", 
    async (verificationСode, {rejectWithValue}) => { 

try {
        const response = await AuthRegister.post(`/register?passcode=${verificationСode}`, {}, {
            withCredentials: true,
        });

        /* const response = await fetch('https://dipdeepcode.ru/api/auth/register?passcode=4598', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: null
        }) */

        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = response.status;
        console.log(data)
            return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);