import { useContext } from "react";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/profile"}>profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed backdrop-blur-xl bg-white/30 shadow-sm px-4 mx-auto z-50">
      {/* navbar start  */}
      <div className="navbar-start">
        <Link to={"/"} className=" flex gap-2 items-center">
          <img className="w-auto h-7" src={logo} alt="" />
          <span className="font-bold">MobileShop</span>
        </Link>
      </div>

      <div className="navbar-end">
        <ul className=" hidden lg:flex gap-5 items-center menu menu-horizontal px-1">
          {navlinks}

          {user ? (
            <div className="flex items-center ">
              <div className="flex items-center md:gap-5">
                <img
                  className=" rounded-full w-8 h-8 mr-3"
                  src={user.photoURL}
                  alt={user.email}
                />
              </div>
              <button
                onClick={logOut}
                className="btn hidden border-none lg:flex text-text bg-button  font-bold"
              >
                SignOut
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn hidden border-none lg:flex text-text bg-button  font-bold"
            >
              Sign In
            </Link>
          )}
        </ul>
        <div className="dropdown z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-[#3b3b3aea] text-white rounded-box w-52"
          >
            {navlinks}
            <li className=" justify-center font-bold">
              {" "}
              {user ? (
                <button
                  onClick={logOut}
                  className=" btn py-3 bg-button text-text"
                >
                  SignOut
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="btn  border-none lg:flex bg-button py-3 mt-3  font-bold text-text"
                >
                  Log In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
