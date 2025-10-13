import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ExampleNavigator from "./ExampleNavigator.jsx";
import Hello from "./hello_react/Hello.jsx";
import ClockList from "./side_effects/clock/ClockList.jsx";
import EffectComparison from "./side_effects/layout_effect/EffectComparison.jsx";
import Rating from "./exercises/rating/Rating.jsx";
import ContactExercise from "./exercises/contact_list/ContactExercise.jsx";
import RoomAdmin from "./exercises/room_admin/RoomAdmin.jsx";
import LSHExercise from "./exercises/local_storage_hook/LSHExercise.jsx";
import PassingData from "./passing_data/PassingData.jsx";
import SumHistory from "./sum_history/SumHistory.jsx";
import Calculator from "./reducers/Calculator.jsx";
import TTTGame from "./tic_tac_toe/TTTGame.jsx";
import MovieGallery from "./side_effects/movie_gallery/MovieGallery.jsx";
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
    path: "/clock_list",
    element: <ClockList />,
  },
  {
    path: "/layout_effect",
    element: <EffectComparison />,
  },
  {
    path: "/movie_gallery",
    element: <MovieGallery />,
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
    path: "/rating",
    element: <Rating />,
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
