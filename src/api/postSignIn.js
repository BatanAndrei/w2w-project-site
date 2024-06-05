import { createAsyncThunk } from '@reduxjs/toolkit';

export const postSignIn = createAsyncThunk(
    "signIn/postSignIn", 
    async ({phoneNumberOrEmail, password}, {rejectWithValue}) => { 

try {
        const response = await fetch(`https://dipdeepcode.ru/api/auth/login`, {
            method: 'POST',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
                'Access-Control-Allow-Methods' :'PUT, GET, POST, DELETE, OPTIONS'
            },

            body: JSON.stringify({
                phoneNumberOrEmail: phoneNumberOrEmail,
                password: password
                })
        });

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