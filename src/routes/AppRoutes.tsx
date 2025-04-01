import Dashboard from "@/components/Dashboard";
import Investment from "@/components/Investment";
import Savings from "@/components/Savings";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/savings" element={<Savings />} />
    </Routes>
  );
};

export default AppRoutes;
