import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

import DashboardLeader from "./pages/DashboardLeader";
import DashboardMember from "./pages/DashboardMember";
import Login from "./pages/Login";

export default function App() {
  const { user } = useContext(UserContext);

  if (!user) return <Login />;

  return (
    <BrowserRouter>
      <Routes>
        {user.level === 3 && (
          <Route path="/dashboard" element={<DashboardLeader />} />
        )}
        {(user.level === 1 || user.level === 2) && (
          <Route path="/dashboard" element={<DashboardMember />} />
        )}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
