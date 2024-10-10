import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleNavigator from "./ExampleNavigator.jsx";
import Hello from "./hello_react/Hello.jsx";
import Simple from "./simple/Simple.jsx";
import ContactExercise from "./exercises/contact_list/solution/ContactExercise.jsx";
import RoomAdmin from "./exercises/room_admin/RoomAdmin.jsx";
import LSHExercise from "./exercises/local_storage_hook/solution/LSHExercise.jsx";
import PassingData from "./passing_data/PassingData.jsx";
import SumHistory from "./sum_history/SumHistory.jsx";
import Calculator from "./reducers/Calculator.jsx";
import TTTGame from "./tic_tac_toe/TTTGame.jsx";
import MovieGallery from "./movie_gallery/MovieGallery.jsx";
import ThemedApp from "./theme_context/ThemedApp.jsx";
import GameGallery from "./game_gallery/GameGallery.jsx";

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
  {
    path: "/tic_tac_toe",
    element: <TTTGame />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/movie_gallery",
    element: <MovieGallery />,
  },
  {
    path: "/theme_context",
    element: <ThemedApp />,
  },
  {
    path: "/room_admin",
    element: <RoomAdmin />,
  },
  {
    path: "/game_gallery",
    element: <GameGallery />,
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>{router.element}</RouterProvider>
  </StrictMode>
);
