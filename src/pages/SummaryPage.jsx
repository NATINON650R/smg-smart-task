// src/pages/SummaryPage.jsx

import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function SummaryPage() {
  const { user } = useContext(UserContext);

  // ตัวอย่าง mock data (ในภายหลังจะใช้จริงจาก backend/database)
  const tasks = [
    { title: "Design UI", status: "Pending", priority: "High", assignee: "A" },
    { title: "Setup Server", status: "Completed", priority: "Medium", assignee: "B" },
    { title: "Write Document", status: "Pending", priority: "Low", assignee: "A" },
    { title: "Debug Module", status: "In Progress", priority: "High", assignee: "C" },
  ];

  const totalTasks = tasks.length;
  const pending = tasks.filter((t) => t.status === "Pending").length;
  const completed = tasks.filter((t) => t.status === "Completed").length;
  const highPriority = tasks.filter((t) => t.priority === "High").length;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">สรุปงานของแผนก</h1>
      <p className="text-gray-600 mb-6">สวัสดี {user?.name ?? "หัวหน้า"} 👋</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500">งานทั้งหมด</p>
          <h2 className="text-2xl font-bold">{totalTasks}</h2>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500">งานที่ยังไม่เสร็จ</p>
          <h2 className="text-2xl font-bold text-yellow-500">{pending}</h2>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <p className="text-gray-500">งานด่วน (High)</p>
          <h2 className="text-2xl font-bold text-red-500">{highPriority}</h2>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">งานทั้งหมด:</h3>
        <ul className="list-disc pl-5">
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong> - {task.status} ({task.priority})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
