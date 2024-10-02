import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ExampleNavigator from "./ExampleNavigator.jsx";
import Hello from "./hello_react/Hello.jsx";
import Simple from "./simple/Simple.jsx";
import ContactExercise from "./exercises/contact_list/ContactExercise.jsx";
import LSHExercise from "./exercises/local_storage_hook/LSHExercise.jsx";
import PassingData from "./passing_data/PassingData.jsx";
import SumHistory from "./sum_history/SumHistory.jsx";
// import TicTacToe from "./tic_tac_toe/TicTacToe.jsx";
import Calculator from "./reducers/Calculator.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExampleNavigator />,
  },
  {
    path: "/hello_react",
    element: <Hello />,
  },
  {
    path: "/simple",
    element: <Simple />,
  },
  {
    path: "/passing_data",
    element: <PassingData />,
  },
  {
    path: "/sum_history",
    element: <SumHistory />,
  },
  {
    path: "/contact_list",
    element: <ContactExercise />,
  },
  {
    path: "/local_storage_hook",
    element: <LSHExercise />,
  },
  // {
  //   path: "/tic_tac_toe",
  //   element: <TicTacToe />,
  // },
  {
    path: "/calculator",
    element: <Calculator />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>{router.element}</RouterProvider>
  </StrictMode>
);