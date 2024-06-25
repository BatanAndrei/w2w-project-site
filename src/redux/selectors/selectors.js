export const selectStatusCreateUser = (state) => state.authCreateExtraReducer.statusCreateUser;
export const selectStatusLoadCreate = (state) => state.authCreateExtraReducer.statusLoadCreate;

export const selectStatusRegistrationUser = (state) => state.authRegistrationExtraReducer.statusRegistrationUser;
export const selectStatusLoadRegistration = (state) => state.authRegistrationExtraReducer.statusLoadRegister;

export const selectStatusSignInUser = (state) => state.signInExtraReducer.statusSignInUser;
export const selectStatusLoadSignIn = (state) => state.signInExtraReducer.statusLoadSignIn;

export const selectFileNameAvatarUser = (state) => state.avatarUserExtraReducer.fileNameAvatarUser;
export const selectStatusLoadAvatarUser = (state) => state.avatarUserExtraReducer.statusLoadAvatar;

export const selectActiveModal = (state) => state.modalPersonalDatalReducer.isActivModal;
export const selectActiveModalFillLeter = (state) => state.modalFillLeterlReducer.isActiveModalFillLeter;
export const selectActiveModalSentCheck = (state) => state.modalSentChecklReducer.isActiveModalSentCheck;

export const selectResponseStatusSummary = (state) => state.summaryExtraReducer.responseStatusSummary;
export const selectStatusLoadSummary = (state) => state.summaryExtraReducer.statusLoadSummary;


