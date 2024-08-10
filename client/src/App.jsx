import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import PlayDuoPage from "./pages/PlayDuoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/play-duo" element={<PlayDuoPage />} />
        <Route
          path="/login"
          element={user && user.length > 0 ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={user && user.length > 0 ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/profile"
          element={user && user.length > 0 ? <ProfilePage /> : <Login />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
