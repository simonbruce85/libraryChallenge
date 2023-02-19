import React, { useEffect, useState } from 'react'
import { supabase } from '../client'



const CreateBook = () => {
    const [book, setBook] = useState({
        title: "",
        author: "",
        description: "",
        quantity: "",
        imgUrl: ""
    }
    );
    const [books, setBooks] = useState([]);
    const { title, author, description, quantity, imgUrl } = book;

    async function createBook() {
        console.log(book)
        await supabase.from('book').insert({ title, author, description, quantity, imgUrl }).single()
        setBook({
            title: "",
            author: "",
            description: "",
            quantity: "",
            imgUrl: ""
        })
        fetchBooks()
    }

    async function fetchBooks() {
        const { data } = await supabase.from('book').select()
        setBooks(data)
        console.log(data)
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div className='w-full h-[80%]  mt-[80px] '>
            <div className='  flex justify-center'>
                <div className='flex flex-col w-[80%] md:[70%] lg:w-[30%]  gap-2 justify-center items-center'>
                    <h1>Create a new book</h1>
                    <div className='flex w-full'>
                        <input className='border-2 w-full rounded-lg' placeholder='Title' value={title} onChange={e => setBook({ ...book, title: e.target.value })}></input>
                    </div>
                    <div className='flex w-full'>
                        <input className='border-2 w-full rounded-lg' placeholder='Author' value={author} onChange={e => setBook({ ...book, author: e.target.value })}></input>
                    </div>
                    <div className='flex w-full'>
                        <input className='border-2 w-full rounded-lg' placeholder='description' value={description} onChange={e => setBook({ ...book, description: e.target.value })}></input>
                    </div>
                    <div className='flex w-full'>
                        <input className='border-2 w-full rounded-lg' placeholder='Quantity' value={quantity} onChange={e => setBook({ ...book, quantity: e.target.value })}></input>
                    </div>
                    <div className='flex w-full'>
                        <input className='border-2 w-full rounded-lg' placeholder='Image Url' value={imgUrl} onChange={e => setBook({ ...book, imgUrl: e.target.value })}></input>
                    </div>
                    <button className='border w-fit px-2 py-1 rounded-lg bg-[#00BBF9]' onClick={createBook}>Create Book</button>
                </div>
            </div>
        </div>
    )
}

export default CreateBook