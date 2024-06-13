import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const AvatarUser = axios.create({
    baseURL: `https://dipdeepcode.ru/api`,
    withCredentials: true           
});

export const postAvatarUser = createAsyncThunk(
    "avatarUser/postAvatarUser", 
    async (selectedFoto, {rejectWithValue}) => { 

    if(!selectedFoto) {
        alert('Выберете своё фото');
        return;
    };

    const formData = new FormData();
    formData.append('file', selectedFoto);

try {
    const response = await AvatarUser.post(`/files`, formData, {});
        
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