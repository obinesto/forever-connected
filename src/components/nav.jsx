import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

const navItems = [
  {
    path: "/",
    item: "HOME",
  },
  {
    path: "/story",
    item: "LOVE STORY",
  },
  {
    path: "/schedule",
    item: "SCHEDULE",
  },
  {
    path: "/gift",
    item: "GIFTS",
  },
  {
    path: "/wedding-party",
    item: "WEDDING PARTY",
  },
  {
    path: "/accommodation",
    item: "ACCOMMODATION",
  },
  {
    path: "/wedding-memories",
    item: "MEMORIES",
  },
];
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getClassName = ({ isActive }) => {
    const baseClasses =
      "relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full";
    const activeClasses = isActive
      ? "text-emerald-800 after:w-full"
      : "hover:text-amber-400";
    return `${baseClasses} ${activeClasses}`;
  };
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] flex justify-between items-center px-8 bg-gray-100 opacity-[90%] z-100">
      <div className="w-1/5 z-50">
        <Link to="/" className="text-2xl font-semibold font-cormorant">
          <span className="text-amber-400">F</span>
          <span className="text-emerald-800">&</span>
          <span className="text-amber-400">C</span>
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex w-4/5 text-emerald-800 justify-end gap-4 text-base">
        {navItems.map((item, index) => (
          <NavLink to={item.path} key={index} className={getClassName}>
            {item.item}
          </NavLink>
        ))}
      </div>

      {/* Hamburger Icon */}
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-50"
      >
        {isMenuOpen ? (
          <MdClose size={30} className="text-emerald-800" />
        ) : (
          <MdMenu size={30} className="text-emerald-800" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="text-emerald-800 text-lg text-center">
          {navItems.map((item, index) => (
            <li key={index} className="py-2">
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to={item.path}
                className={getClassName}
              >
                {item.item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
