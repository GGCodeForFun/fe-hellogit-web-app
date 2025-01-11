import logo from "@/assets/icons/logo.svg";
import { Drawer } from "antd";
import { useState } from "react";
import { PiListBold } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

const routeLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
    console.log(window.innerWidth);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 shadow-lg">
        <Link to="/">
          <img src={logo} alt="logo" className="h-8" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {routeLinks.map((items, index) => (
              <li key={index + items.to}>
                <NavLink
                  to={items.to}
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : ""
                  }
                >
                  {items.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className="md:hidden" onClick={showDrawer}>
          <PiListBold size={32} />
        </button>
      </div>
      <Drawer
        title={<img src={logo} alt="logo" />}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        footer={
          <>
            <div className="text-center">
              <div>Copyright &copy; 2025</div>
              <div>Hello GIT</div>
            </div>
          </>
        }
      >
        <nav>
          <ul className="space-y-4">
            {routeLinks.map((items, index) => (
              <li key={index + items.to} className="text-2xl">
                <NavLink
                  to={items.to}
                  className={({ isActive }) =>
                    isActive ? "font-semibold text-blue-700" : "block"
                  }
                >
                  {items.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
};

export default Header;
