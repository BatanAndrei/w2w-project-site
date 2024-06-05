export const selectStatusCreateUser = (state) => state.authCreateExtraReducer.statusCreateUser;
export const selectStatusLoadCreate = (state) => state.authCreateExtraReducer.statusLoadCreate;

export const selectStatusRegistrationUser = (state) => state.authRegistrationExtraReducer.statusRegistrationUser;
export const selectStatusLoadRegistration = (state) => state.authRegistrationExtraReducer.statusLoadRegister;

export const selectActiveModal = (state) => state.modalPersonalDatalReducer.isActivModal;


