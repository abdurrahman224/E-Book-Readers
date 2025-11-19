import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId,bookName, author, image, category, rating,tags } = book;
  return (
    <Link to = {`/books/${bookId}`}> 

      
    <div className="card bg-base-100 w-96 shadow-xl p-6">
      <figure className="bg-[#F3F3F3] py-8 rounded-2xl ">
        <img
          src={image}
          className="h-[166px] hover:-translate-y-1 hover:scale-100"
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <div className="card-actions ">
          <div className=" flex   gap-3">
            {tags.map((tag ,index) => (
              <button 
              key={index}
              className="bg-green-100 text-[#23BE0A] px-4 py-1.5  rounded-2xl">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <h2 className="card-title">{bookName}</h2>
        <p>{author}</p>


  <div className="border-t-1 border-dashed text-[#131313]"></div>


        <div className="card-actions justify-between">
          <div className="">{category}</div>

          <div className="flex items-center gap-1 ">
            {rating}
            <span className="text-xl text-[#424242]">
              <CiStar />
            </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
