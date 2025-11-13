import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
fetch('/booksData.json')
.then(rsc=>rsc.json())
.then(data => setBooks(data))

    },[])

    return (
        <div>
            <h3 className='text-4xl font-bold font-serif text-center mt-24 mb-9'>Books</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {books.map((book)=><Book key={book.id} book={book}></Book>)}
        </div>
        
        </div>
    );
};

export default Books;