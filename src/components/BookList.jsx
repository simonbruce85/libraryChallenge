import React, { useState } from 'react'
import data from '../data'
import BookCard from './BookCard'

const BookList = () => {

    //[0,1,2,3,...,n-1]
    console.log(data)
    const [search, seatSearch] = useState('');

    const filteredBooks = data.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = e => {
        seatSearch(e.target.value)
    }

    return (
        <div className=' w-full min-h-screen flex justify-center'>

            <div className='mt-[80px] w-[80%]  w-full h-[80%] flex flex-wrap justify-center '>
                <form className='flex justify-center w-full'>
                    <input
                        placeholder='Search Book By title'
                        className='w-full rounded-lg border-2 border-gray-300'
                        onChange={handleChange}
                    >
                    </input>
                </form>
                {filteredBooks.map((book) => {
                    return <BookCard book={book} />
                })}
            </div>
        </div>
    )
}

export default BookList