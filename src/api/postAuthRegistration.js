import { createAsyncThunk } from '@reduxjs/toolkit';

export const postAuthRegistration = createAsyncThunk(
    "authRegistration/postAuthRegistration", 
    async (verificationСode, {rejectWithValue}) => { 
//https://dipdeepcode.ru/api/auth/register?passcode=${verificationСode}
//https://dipdeepcode.ru/api/auth/register?passcode=4598
try {
        const response = await fetch(`https://dipdeepcode.ru/api/auth/register?passcode=${verificationСode}`, {
            method: 'POST',
            //credentials: "include",
            headers: {
                //'Accept': '*/*',
                //'Content-Type': 'application/x-www-form-urlencoded',
                //'Access-Control-Request-Methods': 'POST',
                //'Cookie': 'JSESSIONID=69DDF70D87FC86FE9965592056EB7FA3'

                'Content-Type': 'application/x-www-form-urlencoded',
                //'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
                'Access-Control-Allow-Methods' :'PUT, GET, POST, DELETE, OPTIONS'
            },
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