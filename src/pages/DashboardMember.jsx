import React, { useContext, useState } from "react";
import TaskList from "../components/TaskList";
import { UserContext } from "../contexts/UserContext";

export default function DashboardMember() {
  const { user, logout } = useContext(UserContext);
  // สมมุติให้ลูกน้องเห็นแค่งานที่มอบหมายให้ตัวเอง
  const [tasks] = useState([
    // ตัวอย่างงานที่ลูกน้องได้รับ (ในระบบจริงจะโหลดจาก API)
    {
      title: "ทดสอบงานที่ได้รับ",
      assignee: user.name,
      dueDate: "2025-07-10",
      priority: "Medium",
      status: "In Progress",
      description: "งานตัวอย่างสำหรับลูกน้อง",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard ลูกน้อง</h1>
        <div>
          <span className="mr-4">สวัสดี, {user.name}</span>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            ออกจากระบบ
          </button>
        </div>
      </header>

      <div className="bg-white rounded shadow p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">งานที่ได้รับมอบหมาย</h2>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
