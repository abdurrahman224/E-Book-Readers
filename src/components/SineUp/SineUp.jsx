import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase-init";
import { PiSmileyXEyesDuotone } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SineUp = () => {
  const [showPasswr, setshowPasswr] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Save profile to localStorage
        const userProfile = {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        };
        localStorage.setItem("userProfile", JSON.stringify(userProfile));

        setSuccess(true);
        navigate("/userprofile"); // redirect to profile
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md"
      >
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full p-3 mb-4 border rounded-md"
          required
        />

        <label className="block mb-2 text-sm font-medium">Password</label>
        <div className="relative mb-6">
          <input
            type={showPasswr ? "text" : "password"}
            name="password"
            placeholder="********"
            className="w-full p-3 border rounded-md"
            required
          />

          <button
            type="button"
            onClick={() => setshowPasswr(!showPasswr)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPasswr ? <PiSmileyXEyesDuotone /> : <FaEyeSlash />}
          </button>
        </div>

        {error && <div className="pb-4 text-red-600">{error}</div>}
        {success && <div className="pb-4 text-green-600">Login Successful</div>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Login
        </button>

        <div className="mt-4 flex justify-between text-sm">
          <Link to="/create-account" className="text-blue-600 underline">
            Create Account
          </Link>
          <Link to="/" className="text-blue-600 underline">
            Forget Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SineUp;
