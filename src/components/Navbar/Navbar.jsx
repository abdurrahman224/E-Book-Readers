import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const home = (
    <>
      <NavLink to="/">Home</NavLink>
    </>
  );
  const Listed = (
    <>
      <NavLink to="listedBooks">Listed Books</NavLink>
    </>
  );
  const Pages = (
    <>
      <NavLink to="book">Pages to Read</NavLink>
    </>
  );
  return (
    <div className="navbar  shadow-smc ">
      <div className="navbar-start gap-4 hover:text-[#23BE0A]">
        <div className="dropdown ">
          <div tabIndex={0} className="btn  lg:hidden hover:bg-[#23BE0A]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>{home}</li>
            <li>{Listed}</li>
            <li>{Pages}</li>
          </ul>
        </div>
        <Link to= '/'>
         
          <a className=" md:text-2xl font-bold">E-Book Readers</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-[#23BE0A] font-bold ">{home}</li>
          <li>{Listed}</li>
          <li>{Pages}</li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn btn-outline bg-[#23BE0A] text-white">Sign In</a>
        <a className="btn btn-outline  bg-[#59C6D2] text-white ">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
