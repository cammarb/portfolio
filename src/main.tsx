import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto";

const myTheme: ThemeOptions = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3d6df5",
    },
    secondary: {
      main: "#8dc8ff",
    },
    error: {
      main: "#ee444d",
    },
    info: {
      main: "#97fdd3",
    },
    success: {
      main: "#3bf57f",
    },
    warning: {
      main: "#ff9100",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
