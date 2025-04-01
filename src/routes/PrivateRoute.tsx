import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
