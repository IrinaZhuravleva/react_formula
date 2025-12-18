import * as userService from "./user.js";

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

export const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer " + VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };

  const sessionToken = userService.getSessionToken();

  if (sessionToken !== null) {
    options.headers["Capstone-Session"] = sessionToken;
  };


  if (body) {
    options.body = JSON.stringify(body);
  };

  return fetch(VITE_API_BASE_URL + path, options);
};




// export default apiFetch;
