import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBar, createTheme } from "@mui/material";
import SignIn from "./components/SignIn";
import { ThemeProvider } from "@emotion/react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  // TODO remove, this demo shouldn't need to reset the theme.
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
