import { createAsyncThunk } from '@reduxjs/toolkit';

export const PostPreRegistration = createAsyncThunk(
    "preAuth/postAuth", 
    async ({login, password}, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/account/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
                })
        });

        const data = await response.json();
        
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Неправильный " 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);