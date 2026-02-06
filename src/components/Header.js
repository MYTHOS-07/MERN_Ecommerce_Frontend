import { FaBars, FaShoppingCart, FaUser } from "react-icons/fa";
import Navlink from "./Navlink";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";

export default function Header() {
  return (
    <div className="w-full bg-white dark:bg-gray-950 sticky top-0 shadow z-50">
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/* Navbar */}
          <Navlink />
          <div className="flex items-center">
            {/* themeToggler */}
            <ThemeToggler />
            <button className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary">
              <FaShoppingCart />
            </button>
            <button className="text-gray-700 px-2 py-1 dark:text-gray-300 hover:text-primary">
              <FaUser />
            </button>
            <button className="block md:hidden px-2 py-1 text-gray-700 dark:text-gray-300">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
