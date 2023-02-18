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
            <div className='w-[150px] md:w-[200px] min-h-[300px] h-fit m-1 md:m-2 p-2 rounded-lg hover:scale-105 duration-500 cursor-pointer' onClick={() => setShowDrawer(!showDrawer)}>
                <div className='bg-gray-300 w-full h-[200px] md:h-[250px]'>
                </div>
                <div>
                    <p className='text-sm'>{book.title}</p>
                    <p className='text-sm'> by <strong>{book.author}</strong></p>
                    <p className='text-sm'>Quantity: {book.quantity}</p>
                    {/* <div className='flex just'>
                        <button className='  text-[#00BBF9] mr-2 hover:border-b border-black'>Details</button>
                        <button className=' py-1 text-[#00BBF9]'>Check Out</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BookCard