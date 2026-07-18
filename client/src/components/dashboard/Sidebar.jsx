import {
  FaHome,
  FaUpload,
  FaRobot,
  FaChartLine,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menus = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Upload Resume", icon: <FaUpload /> },
  { name: "AI Analysis", icon: <FaRobot /> },
  { name: "ATS Score", icon: <FaChartLine /> },
  { name: "History", icon: <FaHistory /> },
  { name: "Profile", icon: <FaUser /> },
  { name: "Settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        ResumeAI
      </h1>

      <nav className="flex-1">
        {menus.map((menu) => (
          <div
            key={menu.name}
            className="flex items-center gap-4 p-3 rounded-xl cursor-pointer hover:bg-slate-800 transition mb-2"
          >
            <span className="text-lg">{menu.icon}</span>
            <span>{menu.name}</span>
          </div>
        ))}
      </nav>

      <button className="flex items-center gap-3 p-3 rounded-xl bg-red-500 hover:bg-red-600 transition">
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;