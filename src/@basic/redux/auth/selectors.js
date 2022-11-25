export const selectIsLoggedIn = (state) => state.auth.access_token !== ""
export const selectAccessToken = (state) => state.auth.access_token
export const selectError = (state) => state.auth.error
export const selectResetError = (state) => state.auth.resetError
