import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase-init";
import { PiSmileyXEyesDuotone } from "react-icons/pi";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const CreateAnAccount = () => {
  const [showPasswr, setshowPasswr] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // Terms validation
    if (!terms) {
      setError("Please accept our terms & conditions.");
      return;
    }

    // Password validation
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 6–16 chars, include 1 number & 1 special char."
      );
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update profile with name
        updateProfile(user, { displayName: name }).then(() => {
          // Save user info to localStorage
          const userProfile = {
            uid: user.uid,
            name: name,
            email: user.email,
            photoURL: user.photoURL || null,
          };
          localStorage.setItem("userProfile", JSON.stringify(userProfile));

          // Send email verification
          sendEmailVerification(user).then(() => {
            setSuccess("Account created! Verification email sent.");
          });
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered. Please login.");
        } else {
          setError(error.message);
        }
      });
  };
// Get User Profile
const storedUser = localStorage.getItem("userProfile");
const userProfile = storedUser ? JSON.parse(storedUser) : null;

console.log("User Profile:", userProfile);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create an Account
        </h2>

        <label className="block mb-2 text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <label className="block mb-2 text-sm font-medium">Password</label>
        <div className="relative mb-6">
          <input
            type={showPasswr ? "text" : "password"}
            name="password"
            placeholder="********"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="text"
            onClick={() => setshowPasswr(!showPasswr)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPasswr ? <PiSmileyXEyesDuotone /> : <FaEyeSlash />}
          </button>
        </div>

        {error && <div className="pb-4 text-red-600">{error}</div>}
        {success && <div className="pb-4 text-green-600">{success}</div>}

        <p className="pb-4">
          <input type="checkbox" name="terms" className="checkbox" />
          <span className="ml-2 text-sm">Accept terms & conditions</span>
        </p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>

        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600 underline">
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateAnAccount;
