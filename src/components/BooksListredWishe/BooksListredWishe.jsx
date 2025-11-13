import { CiStar } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksListredWishe = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    // <div className=" flex  gap-10 bg-base-100    shadow-sm p-6">
    //   <figure className="bg-[#F3F3F3] py-6 px-8 rounded-2xl ">
    //     <img
    //       src={image}
    //       className="h-[166px] hover:-translate-y-1 hover:scale-100"
    //       alt="Shoes"
    //     />
    //   </figure>

    //   <div className="">
    //     <h2 className="card-title">{bookName}</h2>
    //     <p>{author}</p>
    //     <div className="py-4">
    //       <div className="flex flex-wrap items-center gap-2 mb-2">
    //         <p className="font-bold underline">Tags:</p>
    //         {tags.map((tag, index) => (
    //           <button
    //             key={index}
    //             className="bg-green-100 text-[#23BE0A] px-8 py-1 rounded-2xl"
    //           >
    //             {tag}
    //           </button>
    //         ))}
    //       </div>

    //       <div className="flex  items-center gap-3 text-gray-600 my-2">
    //         <TfiLocationPin />
    //         <p>Year of Publishing: {yearOfPublishing}</p>
    //         <MdCollectionsBookmark />
    //         <p>Publisher :{publisher} </p>
    //         <MdOutlineInsertPageBreak />
    //         <p>Page: {totalPages}</p>
    //       </div>
    //     </div>
    //     <div className="border-t border-gray-300"></div>{" "}
    //     <div className=" border-dashed text-[#131313]"></div>
    //     <div className="card-actions mt-3">
    //       <p className="bg-[#a2c4ee] text-[#328EFF] px-6 py-1 rounded-2xl">
    //         {" "}
    //         Category: {category}
    //       </p>
    //       <p className="bg-[#f3e7d4] text-[#FFAC33] px-6 py-1 rounded-2xl ">

    //         {rating}
    //       </p>

    //        <button className="bg-[#23BE0A] px-6 py-1 rounded-2xl text-white">View Details</button>

    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col sm:flex-row gap-10 bg-base-100 shadow-sm p-6 rounded-2xl">
      {/* Image */}
      <figure className="bg-[#F3F3F3] py-6 px-8 rounded-2xl flex justify-center items-center">
        <img
          src={image}
          className="h-[166px] object-contain transition-transform duration-500 hover:scale-105"
          alt={bookName}
        />
      </figure>

  
      <div className="flex-1">
        <h2 className="card-title text-xl font-semibold">{bookName}</h2>
        <p className="text-gray-500">by {author}</p>

     
        <div className="py-4">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <p className="font-bold underline">Tags:</p>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-green-100 text-[#23BE0A] px-4 py-1 rounded-2xl text-sm font-medium"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <TfiLocationPin className="text-[#23BE0A]" />
              <p>Year: {yearOfPublishing}</p>
            </div>

            <div className="flex items-center gap-1">
              <MdCollectionsBookmark className="text-[#23BE0A]" />
              <p>Publisher: {publisher}</p>
            </div>

            <div className="flex items-center gap-1">
              <MdOutlineInsertPageBreak className="text-[#23BE0A]" />
              <p>Pages: {totalPages}</p>
            </div>
          </div>
        </div>

       
        <div className="border-t border-gray-200 my-3"></div>

    
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <p className="bg-[#a2c4ee] text-[#328EFF] px-6 py-1 rounded-2xl text-sm">
            Category: {category}
          </p>
          <p className="bg-[#f3e7d4] text-[#FFAC33] px-6 py-1 rounded-2xl text-sm">
            Rating: {rating}
          </p>
       
          <Link to ={`/books/${bookId}`}>
           
            <button className="bg-[#23BE0A] hover:bg-green-600 px-6 py-1 rounded-2xl text-white text-sm transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksListredWishe;
