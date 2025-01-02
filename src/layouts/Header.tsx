import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

const routeLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/blogs", label: "Blogs" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About us" },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-lg">
      <Link to="/">
        <img src={logo} alt="logo" width={32} height={32} />
      </Link>
      <nav>
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
    </div>
  );
};

export default Header;
