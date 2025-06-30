// src/App.js

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage"; // ✅ import ให้เรียบร้อย
import SummaryPage from "./pages/SummaryPage"; // ✅ import

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<TaskPage />} /> {/* ✅ หน้าหลัก */}
      <Route path="/summary" element={<SummaryPage />} /> {/* ✅ เพิ่มหน้า summary */}
    </Routes>
  );
}

export default App;
