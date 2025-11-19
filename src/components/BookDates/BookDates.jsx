import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  AddToostoredReadlist,
  addToStoredWishlist,
} from "../utility/AddToDetail";

const BookDates = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  //   console.log(typeof bookId, typeof data[0].bookId);
  //   console.log(id);
  const book = data.find((book) => book.bookId === id);
  //   console.log(book);
  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = book;
  const handleMarkAsRead = (id) => {
    AddToostoredReadlist(id);
  };
  const handleMarkWishlist = (id) => {
    addToStoredWishlist(id);
  };
  console.log(currentBookId);
  
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 ">
      <figure className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden ">
        <img
          className="`h-[320px]` sm:h-[420px] lg:h-[500px]  w-full object-cover transition-transform duration-700 hover:scale-105 rounded-xl"
          src={image}
          alt={bookName}
        />
      </figure>

      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {bookName}
        </h2>
        <p className="text-gray-600">
          By: <span className="font-medium">{author}</span>
        </p>

        <div className="border-t border-gray-300"></div>

        <p className="text-gray-700 font-medium">{category}</p>

        <div className="border-t border-gray-300"></div>

        <div className="flex flex-col gap-1">
          <p className="text-gray-700 font-bold underline">Review:</p>
          <p className="text-gray-600 leading-relaxed">{review}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <p className="font-bold underline">Tags:</p>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-300"></div>

        <div className=" gap-3 text-gray-700">
          <p>
            Number of Pages: <span className="font-bold">{totalPages}</span>
          </p>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="btn bg-[#23BE0A] border-none text-white py-3 px-6 hover:bg-[#1fa108] transition"
          >
            Read
          </button>
          <button
            onClick={() => handleMarkWishlist(bookId)}
            className="btn bg-[#59C6D2] border-none text-white py-3 px-6 hover:bg-[#46b5c1] transition"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDates;
