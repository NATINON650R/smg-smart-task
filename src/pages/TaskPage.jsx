import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function TaskPage() {
  const { user } = useContext(UserContext);

  const [form, setForm] = useState({
    title: "",
    assignee: "",
    dueDate: "",
    priority: "Medium",
    description: "",
  });

  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = {
      ...form,
      status: "Pending",
      parent: "Uncategorized",
    };
    setTasks([...tasks, newTask]);
    setForm({
      title: "",
      assignee: "",
      dueDate: "",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Add Task</h2>
        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Assigned to"
          value={form.assignee}
          onChange={(e) => setForm({ ...form, assignee: e.target.value })}
        />
        <input
          type="date"
          className="w-full border p-2 mb-3 rounded"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />
        <select
          className="w-full border p-2 mb-3 rounded"
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <textarea
          className="w-full border p-2 mb-4 rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>

      <div className="w-full md:w-2/3 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet.</p>
        ) : (
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Title</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">{task.title}</td>
                  <td>{task.assignee}</td>
                  <td>
                    <span className="px-2 py-1 rounded text-white text-xs bg-gray-400">
                      {task.status}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`text-xs font-semibold ${
                        task.priority === "High"
                          ? "text-red-500"
                          : task.priority === "Medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
