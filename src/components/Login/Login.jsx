import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../Firebase-init";

const Navbar = () => {
  const navigate = useNavigate();

  // Load user profile from LocalStorage
  const storedUser = localStorage.getItem("userProfile");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // --------- LOGOUT FUNCTION ---------
  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userProfile");
      navigate("/login"); // redirect to login
    });
  };

  return (
    <div className="flex justify-end items-center gap-6 p-4">

      {user ? (
        // ----------- Logged In UI -----------
        <div className="flex items-center gap-4">
          <Link to="/userprofile">
            <div className="w-12 h-12 rounded-full overflow-hidden border shadow cursor-pointer">
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co/4pDNDk1/avatar.png"
                }
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        // ----------- Logged Out UI -----------
        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              Login
            </button>
          </Link>

          <Link to="/create-account">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Create Account
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
