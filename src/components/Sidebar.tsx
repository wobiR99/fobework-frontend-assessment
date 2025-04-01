import { Link, useLocation } from "react-router-dom";
import { LineChart, PiggyBank, LogOut, X, LayoutDashboard } from "lucide-react";

import { useEffect, useRef } from "react";

const Sidebar = ({
  showMenu,
  showMenuBar,
  setIsLoggedIn,
}: {
  showMenu: () => void;
  showMenuBar: Boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const location = useLocation();

  const menuRef = useRef<HTMLElement>(null);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (showMenuBar) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [showMenuBar]);
  return (
    <aside
      ref={menuRef}
      style={{
        backgroundColor: "rgb(255 255 255 / 0.1)",
      }}
      className={` w-3/4 md:w-64 max-md:absolute max-md:h-screen backdrop-blur-sm  p-5 top-0 left-0   ${
        !showMenuBar && "hidden"
      }`}
    >
      <div className="flex justify-between ">
        <h2 className="text-lg font-bold mb-6">Fintech App</h2>
        <X
          color="#fff"
          className="cursor-pointer md:hidden"
          onClick={() => showMenu()}
        />
      </div>
      <nav className={` space-y-4`}>
        <Link
          to="/"
          className={`${
            location.pathname === "/" && "bg-gray-700"
          } flex items-center gap-2 p-2 rounded hover:bg-gray-700`}
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link
          to="/investment"
          className={`${
            location.pathname === "/investment" && "bg-gray-700"
          } flex items-center gap-2 p-2 rounded hover:bg-gray-700`}
        >
          <LineChart size={20} /> Investment
        </Link>
        <Link
          to="/savings"
          className={`${
            location.pathname === "/savings" && "bg-gray-700"
          } flex items-center gap-2 p-2 rounded hover:bg-gray-700`}
        >
          <PiggyBank size={20} /> Savings
        </Link>
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 p-2 rounded hover:bg-gray-700"
        >
          <LogOut size={20} /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
