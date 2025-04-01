import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

import SignIn from "./pages/auth/SignIn";
import Topbar from "./components/Topbar";
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => localStorage.getItem("isLoggedIn") === "true"
  );
  const [showMenuBar, setShowMenuBar] = useState<Boolean>(false);

  const showMenu = () => {
    setShowMenuBar((prevValue) => !prevValue);
  };

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);
  return !isLoggedIn ? (
    <div className="bg-black">
      <SignIn setIsLoggedIn={setIsLoggedIn} />
    </div>
  ) : (
    <div className="flex bg-black text-white ">
      <Sidebar
        setIsLoggedIn={setIsLoggedIn}
        showMenu={showMenu}
        showMenuBar={showMenuBar}
      />

      <div className="flex flex-col min-h-screen w-full bg-black text-white md:p-6 p-4">
        <Topbar showMenu={showMenu} showMenuBar={showMenuBar} />
        <div className="flex-1 py-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
