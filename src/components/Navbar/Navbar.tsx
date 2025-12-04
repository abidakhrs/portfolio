import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-md dark:shadow-lg dark:shadow-gray-800 min-h-16">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-12 sm:h-14">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl
                       font-bold
                       bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400
                       bg-clip-text text-transparent"
          >
            Abid Akhras
          </h1>

          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex space-x-1">
              <Link
                to="/"
                className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
              >
                Projects
              </Link>
              <Link
                to="/experience"
                className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
              >
                Experience
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
              >
                Contact
              </Link>
            </div>

            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <FaMoon
                  className="text-gray-700 dark:text-gray-300"
                  size={20}
                />
              ) : (
                <FaSun className="text-yellow-500" size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button - Hidden on desktop */}
          <div className="flex md:hidden space-x-2">
            {/* Theme Toggle Button - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <FaMoon
                  className="text-gray-700 dark:text-gray-300"
                  size={20}
                />
              ) : (
                <FaSun className="text-yellow-500" size={20} />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaTimes
                  className="text-gray-700 dark:text-gray-300"
                  size={20}
                />
              ) : (
                <FaBars
                  className="text-gray-700 dark:text-gray-300"
                  size={20}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 pt-4 pb-2">
            <ul className="flex flex-col space-y-1">
              <li>
                <Link
                  to="/"
                  className="block py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="block py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-3 px-4 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition font-medium text-gray-700 dark:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
