import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Todo App</h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a new task..."
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          {/* Example Todo Item */}
          <li className="flex items-center justify-between border rounded-md p-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" />
              <span>Learn React</span>
            </div>
            <button className="text-red-500 text-sm hover:text-red-600">
              Delete
            </button>
          </li>

          <li className="flex items-center justify-between border rounded-md p-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 accent-blue-600" />
              <span>Build a Todo App UI</span>
            </div>
            <button className="text-red-500 text-sm hover:text-red-600">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
