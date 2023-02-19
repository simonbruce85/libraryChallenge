import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { supabase } from '../client'

const BookList = () => {

    const [books, setBooks] = useState([]);
    const [search, seatSearch] = useState('');
    

    async function fetchBooks() {
        const { data } = await supabase.from('book').select().order('title',  { ascending: true })
        setBooks(data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    


    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    )

    const handleChange = e => {
        seatSearch(e.target.value)
    }

    return (
        <div className=' w-full min-h-screen flex justify-center'>

            <div className='mt-[80px] w-[80%]   h-[80%] flex flex-wrap justify-center '>
                <form className='flex justify-center w-full'>
                    <input
                        placeholder='Search Book By title'
                        className='w-full rounded-lg border-2 border-gray-300'
                        onChange={handleChange}
                    >
                    </input>
                </form>
                {filteredBooks.map((book) => {
                    return <BookCard key={book.id} book={book} />
                })}
            </div>
        </div>
    )
}

export default BookList