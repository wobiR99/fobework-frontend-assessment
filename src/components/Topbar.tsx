import { Menu, UserCircle } from "lucide-react";

const Topbar = ({
  showMenu,
}: {
  showMenu: () => void;
  showMenuBar: Boolean;
}) => {
  const user = localStorage.getItem("user");
  const user_details = user && JSON.parse(user);
  return (
    <nav className="flex justify-between items-center">
      <Menu
        className="cursor-pointer"
        onClick={() => {
          showMenu();
        }}
        color="#fff"
      />

      <div className="flex justify-center items-center gap-2">
        <div
          style={{
            backgroundColor: "rgb(255 255 255 / 0.1)",
          }}
          className="md:p-2 p-1 rounded-lg "
        >
          <UserCircle color="#fff" size={32} />
        </div>
        <aside className="flex flex-col">
          <h3 className="">User</h3>
          <p className="font-bold">{user_details?.name}</p>
        </aside>
      </div>
    </nav>
  );
};

export default Topbar;
