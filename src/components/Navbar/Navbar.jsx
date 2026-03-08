import { Link } from "react-router";
import Menu from "../../assets/menu.png";
import User from "../../assets/user.png";
import Cart from "../../assets/shopping-cart.png";
import Search from "../../assets/search.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 shadow">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold tracking-wide"
        >
          <img className="h-5 w-5" src={Menu} alt="Menu icon" />
        </Link>


        {/* Search */}
        <div className="flex mx-8 bg-white ">
          <img className="h-5 w-5 my-2.5 ml-2" src={Search} />
          <input
            type="text"
            placeholder="Search products..."
            className=" px-4 py-2 rounded-md text-black outline-none"
          />
        </div>


        {/* Right Icons */}
        <div className="flex items-center gap-5 text-lg">

          <button className="hover:text-gray-300">
            <img className="h-5 w-5" src={Cart} />
          </button>

          <button className="hover:text-gray-300">
            <img className="h-5 w-5" src={User} />
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;