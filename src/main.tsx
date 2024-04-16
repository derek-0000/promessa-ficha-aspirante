import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./main.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Libre Franklin",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: { mode: "light" },
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
