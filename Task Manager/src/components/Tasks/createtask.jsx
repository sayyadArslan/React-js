// src/components/CreateTask.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function CreateTask({ onAddTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) return alert("Please fill all fields");
    onAddTask({ ...task, id: Date.now() }); // pass task to parent
    setTask({ title: "", description: "", category: "", dueDate: "" });
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 shadow-xl p-6 rounded-2xl w-full max-w-lg mx-auto"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
        Create New Task
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />

        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
          rows="3"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            name="category"
            value={task.category}
            onChange={handleChange}
            placeholder="Category (e.g., Work)"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />

          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Add Task
        </motion.button>
      </form>
    </motion.div>
  );
}
