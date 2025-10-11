import { motion } from "framer-motion";
import { FaTasks, FaChartPie, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import TaskCard from "../Tasks/task";
import NewTask from "../Tasks/NewTask";
export default function Dashboard() {
  const userName = "Arslan"; // Later replace with Firebase user data

  const cards = [
    { title: "Total Tasks", value: 42, icon: <FaTasks />, color: "text-blue-400" },
    { title: "Completed", value: 30, icon: <FaChartPie />, color: "text-green-400" },
    { title: "Pending", value: 12, icon: <FaTasks />, color: "text-yellow-400" },
  ];

  const handleLogout = () => {
    console.log("User logged out!");
    // Add Firebase logout logic here later
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex flex-col">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-white/10 border-b border-white/10"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Task Manager Dashboard
        </h1>
        <div className="flex items-center space-x-5">
          <span className="flex items-center gap-2 text-gray-200">
            <FaUserCircle size={22} />
            {userName}
          </span>
            <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-3 py-1.5 rounded-lg transition"
          >
            <FaSignOutAlt /> Create Task
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </motion.nav>

      {/* Dashboard Body */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {cards.map((card, index) => (
          <TaskCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </motion.main>

      {/* Recent Activity */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-6"
      >
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2 className="text-xl font-semibold mb-4">Recent Tasks</h2>
            <div className="flex gap-5 aligns-center">
            <NewTask/>
            <NewTask/>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
