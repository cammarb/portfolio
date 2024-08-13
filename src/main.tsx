import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Root from "./Root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { Music } from "./pages/Music.tsx";
import { Blog } from "./pages/Blog.tsx";
import { Tools } from "./pages/Tools.tsx";
import { Projects } from "./pages/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Projects />,
        path: "projects",
      },
      {
        element: <Blog />,
        path: "blog",
      },
      {
        element: <Tools />,
        path: "tools",
      },
      {
        element: <Music />,
        path: "music",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
