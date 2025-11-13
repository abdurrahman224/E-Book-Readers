import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getstoredReadLidt, getStoredWishlist } from "../utility/AddToDetail";
import Book from "../Book/Book";
import BooksListredWishe from "../BooksListredWishe/BooksListredWishe";

const ListedBooks = () => {
  const [redList, setredList] = useState([]);
  const [Wishlist, setWishlist] = useState([]);
  const allBookd = useLoaderData();
  useEffect(() => {
    const stordReadLidt = getstoredReadLidt();
    const stordWishlist = getStoredWishlist();

    const stordReadLidtInt = stordReadLidt.map((id) => parseInt(id));
    // console.log(stordReadLidt,stordReadLidtInt,allBookd);
    const stordWishlistListInt = stordWishlist.map((id) => parseInt(id));

    const reaBookd = allBookd.filter((book) =>
      stordReadLidtInt.includes(book.bookId)
    );
    setredList(reaBookd);
    const Wishlis = allBookd.filter((book) =>
      stordWishlistListInt.includes(book.bookId)
    );

    setWishlist(Wishlis);
  }, [allBookd]);

  return (
    <div className=" bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        My Books Section
      </h2>

      <Tabs>
        <TabList>
          <Tab>Listed Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-lg font-semibold mb-2">
            Listed Books: {redList.length}{" "}
          </h3>
          <div className="flex flex-col gap-3">
            
            {redList.map((book) => (
              <BooksListredWishe
                key={book.bookId}
                book={book}
              ></BooksListredWishe>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-lg font-semibold mb-2">
            Wishlist Books:{Wishlist.length}

            <div>
                {

Wishlist.map(book =><BooksListredWishe key={book.bookId} book={book}></BooksListredWishe>)

                }
            </div>
          </h3>
          <p></p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
