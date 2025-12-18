import { apiFetch } from "./apiFetch";


const CAPSTONE_SESSION_STORAGE_KEY = "capstone_session_token";

export const setSessionToken = (token) => {
  localStorage.setItem(CAPSTONE_SESSION_STORAGE_KEY, token);
};

export const getSessionToken = () => localStorage.getItem(CAPSTONE_SESSION_STORAGE_KEY);

export const deleteSessionToken = () => {
  localStorage.removeItem(CAPSTONE_SESSION_STORAGE_KEY);
};

export const createUser = ({username, password}) => apiFetch("POST", "/users", {username, password});
export const createSession = ({username, password}) => apiFetch("POST", "/users/session", {username, password});
