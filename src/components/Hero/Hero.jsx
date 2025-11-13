import React from "react";
import Books from "../Books-/Books";

const Hero = () => {
  return (
    <div className="hero  bg-base-200 mt-12">
      <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-3 px-6 lg:px-16 py-10">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-gray-800">
            Books to freshen up your bookshelf
          </h2>
          <button className="btn bg-[#23BE0A] border-none px-8 py-6 mt-8 font-work text-white hover:bg-[#1fa108] transition">View The List</button>
        </div>
        <figure className="w-full max-w-xs sm:max-w-sm lg:max-w-md">

          <img className="rounded-2xl w-full shadow-2xl object-cover  transition-transform duration-700 hover:scale-105" src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
