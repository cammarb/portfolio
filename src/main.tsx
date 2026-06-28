import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Root from "./Root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { Music } from "./pages/Music.tsx";
import { Blog } from "./pages/Blog.tsx";
import { BlogEntry } from "./pages/BlogEntry.tsx";
import { Projects } from "./pages/Projects.tsx";
import { AboutMe } from "./pages/AboutMe.tsx";

export const blogAPI: String | null = import.meta.env.BLOG_API;

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
        element: <AboutMe />,
        path: "about-me",
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
        element: <BlogEntry />,
        path: "blog/:id",
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
