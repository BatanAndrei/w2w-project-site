import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authCreateSlice } from '../slices/authCreateSlice';
import { informationSlice } from '../slices/informationSlice';
import { authRegistrationSlice } from '../slices/authRegistrationSlice';
import { signInSlice } from '../slices/signInSlice';
import { avatarUserSlice } from '../slices/avatarUserSlice';
import { questionnireSlice } from '../slices/questionnireSlise';
import { summarySlice } from '../slices/summarySlice';
import { getLogoSlice } from '../slices/getLogoSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []//'authCreateExtraReducer'
};

const reducer = combineReducers({
    modalPersonalDatalReducer: informationSlice.reducer,
    modalFillLeterlReducer: informationSlice.reducer, 
    modalSentChecklReducer: informationSlice.reducer,
    authCreateExtraReducer: authCreateSlice.reducer,
    statusCreateUserReducer: authCreateSlice.reducer,
    statusLoadNullCreateReducer: authCreateSlice.reducer,
    statusLoadNullRegisterReducer: authRegistrationSlice.reducer,
    authRegistrationExtraReducer: authRegistrationSlice.reducer,
    signInExtraReducer: signInSlice.reducer,
    statusLoadNullSignInReducer: signInSlice.reducer,
    avatarUserExtraReducer: avatarUserSlice.reducer,
    questionnireExtraReducer: questionnireSlice.reducer,
    getDataFromQuestionnireFirst: questionnireSlice.reducer,
    getDataFromQuestionnireTopicСommunication: questionnireSlice.reducer,
    getDataFromQuestionnireSecond: questionnireSlice.reducer,
    getDataFromQuestionnireYhird: questionnireSlice.reducer,
    getDataFromQuestionnireFouth: questionnireSlice.reducer,
    summaryExtraReducer: summarySlice.reducer,
    getLogoExtraReducer: getLogoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);