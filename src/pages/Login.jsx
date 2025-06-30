import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("กรุณากรอกชื่อ");
      return;
    }
    login(name, Number(level));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow max-w-sm w-full"
      >
        <h2 className="text-2xl mb-6 text-center font-bold">เข้าสู่ระบบ</h2>

        <label className="block mb-2 font-semibold">ชื่อผู้ใช้</label>
        <input
          type="text"
          className="w-full p-3 mb-4 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ชื่อของคุณ"
        />

        <label className="block mb-2 font-semibold">ระดับผู้ใช้</label>
        <select
          className="w-full p-3 mb-6 border rounded"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="3">หัวหน้า (Level 3)</option>
          <option value="2">ผู้ดูแล (Level 2)</option>
          <option value="1">ลูกน้อง (Level 1)</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
}
