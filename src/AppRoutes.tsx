import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout showHero={true} />}>
        <Route path="/" element={<Homepage />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/manage-restaurant" element={<ManageRestaurantPage />} />
        </Route>
      </Route>

      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
export default AppRoutes;
