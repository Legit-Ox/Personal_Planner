import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import React from "react";
import axios from "axios";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

import Tasks from "./pages/Tasks/Tasks";
import Reminders from "./pages/Reminders/Reminders";
import NoteMain from "./pages/Notes/Notemain/NoteMain";
import Settings from "./pages/Setting_page/setting_page";
import "./App.css";
export const ThemeContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - Code Focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {/* <div className="container"> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              user ? <Dashboard user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />

          <Route
            exact
            path="/tasks"
            element={user ? <Tasks user={user} /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/notes"
            element={user ? <NoteMain user={user} /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/reminders"
            element={user ? <Reminders user={user} /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/settings"
            element={user ? <Settings user={user} /> : <Navigate to="/" />}
          />
        </Routes>
        {/* </div> */}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
