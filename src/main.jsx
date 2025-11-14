import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./errorElement/errorElement";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import BookDates from "./components/BookDates/BookDates";
import ListedBooks from "./components/ListedBooks/ListedBooks";

import { ToastContainer } from "react-toastify";
import PagestoRead from "./components/PagestoRead/PagestoRead";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "books/:bookId",
        Component: BookDates,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "listedBooks",
        Component: ListedBooks,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "PagestoRead",
        Component: PagestoRead,
        
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
