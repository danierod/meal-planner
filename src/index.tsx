import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  LoaderFunctionArgs,
} from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Ingredients from "./routes/Ingredients";
import Meals, { mealsLoader } from "./routes/Meals";
import MealDetails, { mealDetailsLoader } from "./components/MealDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  { path: "/ingredients", element: <Ingredients /> },
  {
    path: "/meals",
    element: <Meals />,
    loader: mealsLoader,
    children: [
      {
        path: "/meals/:mealId",
        element: <MealDetails />,
        loader: mealDetailsLoader,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div>
      <Outlet />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
