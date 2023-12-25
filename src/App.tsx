import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme } from "@mui/material";
import SignIn from "./components/SignIn";
import { ThemeProvider } from "@emotion/react";

function App() {
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
