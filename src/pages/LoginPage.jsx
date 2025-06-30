import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login(name, level);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="w-full border p-2 mb-4 rounded"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="1">Level 1 (Staff)</option>
          <option value="2">Level 2 (Leader or cheif)</option>
          <option value="3">Level 3 (Mannagement)</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
