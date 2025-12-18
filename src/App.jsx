import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import PlantPage from "./pages/PlantPage";
import PlantShowPage from "./pages/PlantShowPage";
import SessionContext from "./contexts/SessionContext";
import * as userService from "services/user.js";
import { jwtDecode } from "jwt-decode";


const App = () =>{
  const [sessionToken, setSessionToken] = useState(() => userService.getSessionToken());

  return (
    <SessionContext.Provider value={
      {
        userName: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
        setSessionToken(token);
        userService.setSessionToken(token);
      },
        signOut: () => {
        setSessionToken(null);
        userService.deleteSessionToken();
      }
    }}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/plants" element={<PlantPage />} />
            <Route path="/plants/:plantId" element={<PlantShowPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  )
}

export default App;
