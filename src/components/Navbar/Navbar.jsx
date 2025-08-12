import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/food-logo.png"; // Pastikan path ke logo benar
// Menggunakan FaBars untuk hamburger icon
import DarkMode from "./DarkMode";
import "../../global.css";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  
  { id: 5, name: "Team", link: "/team" },
  { id: 6, name: "Blog", link: "/source" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false); // Menutup menu setelah klik
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 font-normal ">
      
      <div className="container mx-auto py-3 sm:py-0 px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-2xl flex items-center gap-1 font-super">
              <img src={Logo} alt="Logo" className="w-10" />
              C0DIFYHUB
            </Link>
          </div>

          {/* Menu & Actions */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <DarkMode />

            {/* Mobile Menu Toggle Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-white text-2xl"
              >
                <FaBars />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-4">
              <ul className="flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <Link
                      to={menu.link}
                      className="inline-block py-4 px-4 hover:text-blue-800 font-bold"
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-gray-800 text-white w-full mt-4 rounded-lg p-4">
            <ul>
              {Menu.map((menu) => (
                <li key={menu.id} className="py-2">
                  <Link
                    to={menu.link}
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick} // Menutup menu setelah klik
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
