import React, { useState, useContext } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { UserContext } from "../contexts/UserContext";

export default function DashboardLeader() {
  const { user, logout } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard หัวหน้า</h1>
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

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 bg-white rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-4">เพิ่มงานใหม่</h2>
          <TaskForm addTask={addTask} />
        </div>

        <div className="md:w-2/3 bg-white rounded shadow p-6 overflow-auto">
          <h2 className="text-xl font-semibold mb-4">รายการงานทั้งหมด</h2>
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
