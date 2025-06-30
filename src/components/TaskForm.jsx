import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [form, setForm] = useState({
    title: "",
    assignee: "",
    dueDate: "",
    priority: "Medium",
    description: "",
    status: "Pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert("กรุณากรอกชื่องาน");
      return;
    }
    addTask(form);
    setForm({
      title: "",
      assignee: "",
      dueDate: "",
      priority: "Medium",
      description: "",
      status: "Pending",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="ชื่องาน *"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="ผู้รับผิดชอบ"
        value={form.assignee}
        onChange={(e) => setForm({ ...form, assignee: e.target.value })}
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="date"
        value={form.dueDate}
        onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="High">สูง (High)</option>
        <option value="Medium">กลาง (Medium)</option>
        <option value="Low">ต่ำ (Low)</option>
      </select>
      <textarea
        rows={3}
        placeholder="รายละเอียด"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full border p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold"
      >
        เพิ่มงาน
      </button>
    </form>
  );
}
