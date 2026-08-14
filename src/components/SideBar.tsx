const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">My App</h1>

      <nav className="space-y-2">
        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
          Dashboard
        </a>

        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
          Profile
        </a>

        <a href="#" className="block px-4 py-2 rounded hover:bg-gray-800">
          Settings
        </a>
      </nav>
    </aside>
  );
};

export default SideBar;
