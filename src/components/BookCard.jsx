import React, { useState } from 'react'
import BookDetailsDrawer from './BookDetailsDrawer';

const BookCard = ({ book }) => {

    const [showDrawer, setShowDrawer] = useState(false);


    return (
        <>
            <BookDetailsDrawer
                showDrawer={showDrawer}
                setShowDrawer={setShowDrawer}
                book={book}
            />
            <div className='w-[250px] md:w-[250px] min-h-[300px] h-fit m-1 md:m-2 p-2 rounded-lg hover:scale-105 duration-500 cursor-pointer' onClick={() => setShowDrawer(!showDrawer)}>
                <div className={`${book.imgUrl?"":"bg-gray-300 w-full h-[300px] md:h-[300px]"}`} >
                <img src={book.imgUrl} className={`${book.imgUrl?" h-[300px] w-[250px] ":"hidden"}`}/>
                </div>
                <div>
                    <p className='text-sm'><em>{book.title}</em></p>
                    <p className='text-sm'> by <strong>{book.author}</strong></p>
                    <p className='text-sm'>Quantity: {book.quantity}</p>
                </div>
            </div>
        </>
    )
}

export default BookCard