const ACCESS_TOKEN = "access_token";

export const getAccessToken = () => window.localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = (value) => window.localStorage.setItem(ACCESS_TOKEN, value);

export const removeAccessToken = () => window.localStorage.removeItem(ACCESS_TOKEN);