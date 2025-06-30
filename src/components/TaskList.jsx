import React from "react";

export default function TaskList({ tasks }) {
  if (!tasks.length) {
    return <p className="text-gray-500">ไม่มีงานในระบบ</p>;
  }

  const priorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-100";
      case "Medium":
        return "text-yellow-600 bg-yellow-100";
      case "Low":
        return "text-green-600 bg-green-100";
      default:
        return "";
    }
  };

  return (
    <table className="w-full border-collapse text-left text-gray-700">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="p-3 font-semibold">ชื่องาน</th>
          <th className="p-3 font-semibold">ผู้รับผิดชอบ</th>
          <th className="p-3 font-semibold">กำหนดส่ง</th>
          <th className="p-3 font-semibold">สถานะ</th>
          <th className="p-3 font-semibold">ความสำคัญ</th>
          <th className="p-3 font-semibold">รายละเอียด</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <tr
            key={i}
            className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
          >
            <td className="p-3 font-semibold">{task.title}</td>
            <td className="p-3">{task.assignee || "-"}</td>
            <td className="p-3">
              {task.dueDate
                ? new Date(task.dueDate).toLocaleDateString("th-TH")
                : "-"}
            </td>
            <td className="p-3">
              <span className="inline-block px-3 py-1 rounded-full bg-gray-300 text-gray-700 text-xs font-semibold">
                {task.status}
              </span>
            </td>
            <td className={`p-3 font-semibold ${priorityColor(task.priority)}`}>
              {task.priority}
            </td>
            <td className="p-3">{task.description || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
